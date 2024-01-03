document.addEventListener('DOMContentLoaded', function() {
    initRotatingWheel();

function initRotatingWheel() {
    const wheel = document.querySelector('.wheel-list');
    const items = wheel.querySelectorAll('li');
    const angleStep = 360 / items.length;
    let currentAngle = 0;

    items.forEach((item, index) => {
        const angle = angleStep * index;
        item.style.transform = `rotateX(${angle}deg) translateZ(150px)`;
    });

    wheel.addEventListener('wheel', function(event) {
        event.preventDefault();
        currentAngle += event.deltaY; // Adjust rotation sensitivity if needed
        wheel.style.transform = `rotateX(${currentAngle}deg)`;
    });
    initRotatingWheel();}
});
