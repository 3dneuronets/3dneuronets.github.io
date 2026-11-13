"""Regenerate static publication cards and filters from data/publications.json.
Run from any directory: python tools/update_publications.py (from repo root).
Only generated blocks are replaced; no extra Python packages required.
"""
from html import escape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
papers = json.loads((ROOT / 'data/publications.json').read_text(encoding='utf-8'))


def card(p):
    title, authors, journal, topic, doi = [escape(p[k], quote=True) for k in ('title', 'authors', 'journal', 'topic', 'doi')]
    year = int(p['year'])
    url = 'https://doi.org/' + doi
    return f'''<article class="nn-paper" data-topic="{topic}" data-year="{year}">
    <div class="nn-paper-meta"><span>{year}</span><span>{topic}</span></div>
    <h3><a href="{url}" target="_blank" rel="noopener noreferrer">{title}</a></h3>
    <p>{authors} · <i>{journal}</i></p>
    <a class="nn-doi" href="{url}" target="_blank" rel="noopener noreferrer">DOI: {doi} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
</article>'''


def replace(text, name, content):
    start, end = f'<!-- {name}:START -->', f'<!-- {name}:END -->'
    pattern = re.escape(start) + r'.*?' + re.escape(end)
    result, n = re.subn(pattern, lambda _: start + content + end, text, flags=re.S)
    if n != 1:
        raise ValueError(f'Expected exactly one {name} block, found {n}')
    return result


# Guard against duplicated articles and ambiguous featured order.
assert len({p['doi'].lower() for p in papers}) == len(papers), 'Duplicate DOI'
featured = sorted((p for p in papers if p.get('featured_order', 0) > 0), key=lambda p: p['featured_order'])
assert len({p['featured_order'] for p in featured}) == len(featured), 'Duplicate featured_order'
all_cards = '\n' + '\n'.join(card(p) for p in sorted(papers, key=lambda p: -p['year'])) + '\n'
featured_cards = '\n' + '\n'.join(card(p) for p in featured) + '\n'
topics = '<option value="">All topics</option>' + ''.join(f'<option value="{escape(t, quote=True)}">{escape(t)}</option>' for t in sorted({p['topic'] for p in papers}))
years = '<option value="">All years</option>' + ''.join(f'<option>{y}</option>' for y in sorted({p['year'] for p in papers}, reverse=True))
updates = {
    'index.html': {'FEATURED': featured_cards},
    'about.html': {'FEATURED': featured_cards},
    'publications.html': {'BIBLIOGRAPHY': all_cards, 'TOPICS': topics, 'YEARS': years, 'COUNT': f'{len(papers)} selected publications'},
}
# Validate all marker blocks before writing any file.
results = {}
for file, blocks in updates.items():
    path = ROOT / file
    text = path.read_text(encoding='utf-8')
    for name, content in blocks.items():
        text = replace(text, name, content)
    results[path] = text
for path, text in results.items():
    path.write_text(text, encoding='utf-8')
print(f'Updated 3 pages: {len(papers)} publications; {len(featured)} featured.')
