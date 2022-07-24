function main() {
    window.addEventListener('DOMContentLoaded', () => {
        bindNavHoverEffect();
    })
}

function bindNavHoverEffect() {
    const navEl = document.querySelector('nav');
    const indicatorEl = navEl.querySelector('#indicator');
    navEl.querySelectorAll('a').forEach((linkEl) => {
        linkEl.addEventListener('mouseenter', (e) => {
            const { x: navX } = navEl.children[0].getBoundingClientRect()
            const { x, width } = e.target.getBoundingClientRect();

            const offset = x - navX;
            const widthOffset = width / 2;

            indicatorEl.style.opacity = 1;
            indicatorEl.style.transform = 'translate(' + (offset + widthOffset - 20) + 'px)';
        });
    });
    navEl.addEventListener('mouseleave', () => {
        indicatorEl.style.opacity = 0;
        indicatorEl.style.transform = '';
    });
}

main();