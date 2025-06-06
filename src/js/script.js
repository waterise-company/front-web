console.log("Script carregado!");

// Array com caminhos das imagens (ajuste os caminhos para suas imagens reais)
let imagens = [
  "src/assets/img/enchente horizontal 4.jpg",
  "src/assets/img/cachorro enchente horizontal.jpg",
  "src/assets/img/enchente horizontal 3.jpg",
  "src/assets/img/enchente horizontal 2.jpg"
];

let index = 0;
const tempo = 3000;

function slideShow() {
  const imgElement = document.getElementById('image');
  if (!imgElement) return;

  imgElement.src = imagens[index];
  index++;
  if (index === imagens.length) {
    index = 0;
  }
  setTimeout(slideShow, tempo);
}

// Iniciar slideshow quando o conteúdo estiver carregado
window.addEventListener('load', slideShow);

function mudarCor(tema) {
  const body = document.body;
  const root = document.documentElement;

  switch (tema) {
    case 'branco':
      body.style.backgroundColor = '#FFFFFFFF';
      break;
    case 'azul':
      body.style.backgroundColor = '#aac1df';
      break;
    case 'cinza':
      body.style.backgroundColor = '#878787FF';
      break;
  }
}

// ===============================
// INICIAR SCRIPT QUANDO A PÁGINA CARREGAR
// ===============================
window.addEventListener('load', () => {
  slideShow();
});