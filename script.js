document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.createElement('button');
    topButton.textContent = 'Voltar ao Topo';
    document.body.appendChild(topButton);

    topButton.style.position = 'fixed';
    topButton.style.bottom = '20px';
    topButton.style.right = '10px';

    topButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});
