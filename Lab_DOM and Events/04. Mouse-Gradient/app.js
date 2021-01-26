function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let x = Math.floor(event.offsetX / (event.target.clientWidth - 1) * 100);
        let y = Math.floor(event.offsetY / (event.target.clientHeight - 1) * 100);
        document.getElementById('result').textContent = `${x}% / ${y}%`;
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }
}