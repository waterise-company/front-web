console.log("Script carregado!");

// ===============================
// SLIDESHOW
// ===============================
let imagens = [
  "src/assets/img/enchente horizontal 4.jpg",
  "src/assets/img/cachorro enchente horizontal.jpg",
  "src/assets/img/enchente horizontal 2.jpg"
];

let index = 0;
const tempo = 3000;

function slideShow() {
  const imgElement = document.getElementById('image');
  if (!imgElement) return;

  imgElement.src = imagens[index];
  index = (index + 1) % imagens.length;
  setTimeout(slideShow, tempo);
}

window.addEventListener('load', slideShow);

// ===============================
// MUDAR COR DO FUNDO
// ===============================
function mudarCor(tema) {
  const body = document.body;
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
// MENU HAMBÚRGUER
// ===============================
const hamburguer = document.querySelector(".hamburguer");
const headerMenu = document.querySelector(".header-menu");

function toggleMenu() {
  hamburguer.classList.toggle("active");
  headerMenu.classList.toggle("active");
}

hamburguer?.addEventListener('click', toggleMenu);
headerMenu?.addEventListener('click', (e) => {
  if (e.target.classList.contains('item-menu')) toggleMenu();
});

// ===============================
// BOTÕES COLORIDOS AO SCROLL
// ===============================
const botoes = document.querySelector('.color-buttons');
const logo = document.getElementById('logo');
let ultimoScroll = 0;

window.addEventListener('scroll', () => {
  const scrollAtual = window.scrollY;
  const limite = window.innerHeight * 0.9;
  const logoRect = logo?.getBoundingClientRect();

  if (!logoRect) return;

  if (scrollAtual > limite && scrollAtual > ultimoScroll) {
    const distanciaParaEsconder = Math.min(logoRect.bottom + 10, 60);
    botoes.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    botoes.style.transform = `translateY(-${distanciaParaEsconder}px)`;
    botoes.style.opacity = '0';
    botoes.style.pointerEvents = 'none';
  } else if (scrollAtual < limite && scrollAtual < ultimoScroll) {
    botoes.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    botoes.style.transform = 'translateY(0)';
    botoes.style.opacity = '1';
    botoes.style.pointerEvents = 'auto';
  }

  ultimoScroll = scrollAtual;
});

// ===============================
// CONFIRMAR EXCLUSÃO
// ===============================
function confirmDelete() {
  if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
    alert('Conta excluída.');
  }
}

// ===============================
// AUTO-PREENCHIMENTO DO FORMULÁRIO
// ===============================
window.onload = function () {
  ['nome', 'cidade', 'estado'].forEach(id => {
    const valor = localStorage.getItem(id);
    if (valor) document.getElementById(id).value = valor;
  });
};

// ===============================
// SALVAR DADOS DO FORMULÁRIO (GENÉRICO)
// ===============================
const form = document.querySelector('form');
if (form) {
  form.onsubmit = function (e) {
    e.preventDefault();
    ['nome', 'cidade', 'estado'].forEach(id => {
      const el = document.getElementById(id);
      if (el) localStorage.setItem(id, el.value);
    });
    alert('Alterações salvas!');
  };
}

// ===============================
// CADASTRO DE USUÁRIO
// ===============================
const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
  cadastroForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    mensagemErro.textContent = '';

    if (!nome || !email || !senha || !confirmarSenha) {
      mensagemErro.textContent = 'Por favor, preencha todos os campos.';
      return;
    }

    if (senha !== confirmarSenha) {
      mensagemErro.textContent = 'As senhas não coincidem.';
      return;
    }

    const usuario = { nome, email, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    mensagemErro.style.color = 'green';
    mensagemErro.textContent = 'Cadastro realizado com sucesso!';

    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
  });
}

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    let msg = document.getElementById('login-msg');
    if (msg) msg.remove();

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = './home_usuario.html'; // Altere para o caminho desejado
});

document.body.classList.add('home-usuario');
