// Keep the shared fixed header clear of the new page content.
(() => {
    const header = document.querySelector('header.header');
    const main = document.querySelector('.nn-inner-page');
    if (header && main) {
        const align = () => { main.style.paddingTop = getComputedStyle(header).position === 'fixed' ? `${header.offsetHeight}px` : '0px'; };
        align();
        window.addEventListener('resize', align);
        window.addEventListener('load', align);
        if ('ResizeObserver' in window) new ResizeObserver(align).observe(header);
    }
    // Allow visitors to pause the looping cortical animation and respect reduced motion.
    const video = document.getElementById('cortical-video');
    if (video) {
        const unavailable = () => {
            video.hidden = true;
            document.getElementById('cortical-video-unavailable').hidden = false;
        };
        video.addEventListener('error', unavailable);
        video.querySelector('source').addEventListener('error', unavailable);
        if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) unavailable();
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const respectMotion = () => { if (motion.matches) { video.autoplay = false; video.pause(); } };
        respectMotion();
        motion.addEventListener('change', respectMotion);
    }
    const controls = document.getElementById('pub-controls');
    if (!controls) return;
    const search = document.getElementById('pub-search');
    const topic = document.getElementById('pub-topic');
    const year = document.getElementById('pub-year');
    const cards = [...document.querySelectorAll('#pub-list .nn-paper')];
    const count = document.getElementById('pub-count');
    const empty = document.getElementById('pub-empty');
    function filter() {
        const query = search.value.trim().toLocaleLowerCase();
        let visible = 0;
        cards.forEach(card => {
            const match = (!query || card.textContent.toLocaleLowerCase().includes(query)) && (!topic.value || card.dataset.topic === topic.value) && (!year.value || card.dataset.year === year.value);
            card.hidden = !match;
            if (match) visible++;
        });
        count.textContent = `${visible} of ${cards.length} selected publications`;
        empty.hidden = visible !== 0;
    }
    search.addEventListener('input', filter);
    topic.addEventListener('change', filter);
    year.addEventListener('change', filter);
    document.getElementById('pub-reset').addEventListener('click', () => { search.value = ''; topic.value = ''; year.value = ''; filter(); search.focus(); });
    controls.hidden = false;
    filter();
})();
