const imgs = document.getElementById('imga');
const img = document.querySelectorAll('#imga img');

let idx = 0; // Índice para rastrear a imagem atual
const valor = 100; // Distância em pixels que cada imagem deve mover

function carrossel() {
    // Número de imagens
    const numImgs = img.length;

    // Atualiza a posição do carrossel com base no índice
    
    imgs.style.transform = `translateX(${-idx * valor}px)`;
    imgs.style.transition = 'transform 2s linear';

    // Atualiza o índice para a próxima imagem
    idx++;

    // Volta ao início do carrossel quando chega no final
    if (idx >= 40 || `Number(translateX(${-idx * valor}px))` == Number(imgs.length)) {
        setTimeout(function() {
        idx = 0;
        imgs.style.transform = `translateX(${0}px)`;
        imgs.style.transition = 'transform 40s linear';
        }, 40000);
      }
}

// Intervalo para a função carrossel
setInterval(carrossel, 2000);
