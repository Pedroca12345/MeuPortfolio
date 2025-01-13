let indexAtual = 0;

function slide (item) {
    const cardsProjetos = document.querySelectorAll('.projeto-card-mobile');
    const cardsTotais = cardsProjetos.length;
    
    
    indexAtual += item;

    if (indexAtual < 0) {
        indexAtual = cardsTotais - 1;
    } else if (indexAtual >= cardsTotais) {
        indexAtual = 0;
    }

    const slider = document.querySelector('.slider');
    const cardsWidth = cardsProjetos[0].offsetWidth + 15;
    slider.style.transform = `translateX(-${indexAtual * cardsWidth}px)`;
}