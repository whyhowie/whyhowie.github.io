const canvas = document.querySelector('.globe-canvas');
const ctx = canvas.getContext('2d');

// Resize handling
function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Globe parameters
const radius = 500;
const latLines = 12;
const lonLines = 24;
const axialTilt = 23.5 * Math.PI / 180; // tilt in radians
let angle = 0;

// Animation timing
let lastTime = performance.now();
const rotationSpeed = .1 * Math.PI; // radians per second (.05 rev/sec)

function drawGlobe(now = performance.now()) {
    const delta = (now - lastTime) / 1000; // seconds since last frame
    lastTime = now;
    angle += rotationSpeed * delta;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.strokeStyle = 'rgba(50, 205, 50, 0.15)'; // transparent limegreen
    ctx.lineWidth = 2;

    // Draw latitude lines
    for (let i = 0; i <= latLines; i++) {
        const theta = (i / latLines - 0.5) * Math.PI;
        ctx.beginPath();
        for (let j = 0; j <= 100; j++) {
            const phi = (j / 100) * 2 * Math.PI;
            const x0 = radius * Math.cos(theta) * Math.cos(phi + angle);
            const y0 = radius * Math.sin(theta);

            // Rotate around z-axis
            const x = cx + x0 * Math.cos(axialTilt) - y0 * Math.sin(axialTilt);
            const y = cy + x0 * Math.sin(axialTilt) + y0 * Math.cos(axialTilt);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    // Draw longitude lines
    for (let i = 0; i < lonLines; i++) {
        const phi = (i / lonLines) * 2 * Math.PI;
        ctx.beginPath();
        for (let j = -50; j <= 50; j++) {
            const theta = (j / 50) * (Math.PI / 2);
            const x = cx + radius * Math.cos(theta) * Math.cos(phi + angle);
            const y = cy + radius * (
                Math.sin(theta) * Math.cos(axialTilt) -
                Math.cos(theta) * Math.sin(axialTilt) * Math.sin(phi + angle)
            );
            if (j === -50) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    requestAnimationFrame(drawGlobe);
}

drawGlobe();