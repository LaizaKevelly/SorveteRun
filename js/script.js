const gusta = document.querySelector('.gustavoParado');
const sorvete = document.querySelector('.sorvete');

const jump = () => {
    gusta.classList.add('jump');
    gusta.src = './images/gustaAgachado.png';

    setTimeout(() => {
        gusta.src = './images/gustaParadao.png';
    }, 450);
    
    setTimeout(() => {
        gusta.classList.remove('jump');
    }, 500);
    

}

const loop = setInterval(() => {

    const sorvetePosition = sorvete.offsetLeft;
    const gustaPosition = +window.getComputedStyle(gusta).bottom.replace('px', '');

    if (sorvetePosition <= 60 && sorvetePosition > 10 && gustaPosition < 85) {
        gusta.src = './images/gustaObeso.png';

        sorvete.style.animation = 'none';
        sorvete.style.left = `${sorvetePosition}px`;

        gusta.style.animation = 'none';
        gusta.style.bottom = `${gustaPosition}px`;

    }

}, 10);

document.addEventListener('keydown', jump)