// ATIVAR MENU ATIVO
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = new URL(location.href);
    const href = new URL(link.href);

    if (url.pathname === href.pathname) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// GALERIA DE IMAGENS SHAPES
document.addEventListener("DOMContentLoaded", () => {
    const galeriaSecundaria = document.querySelectorAll(".shape-imagens-secundarias img");
    const galeriaPrincipal = document.querySelector(".shape-imagem-principal");

    function trocarImagem(event) {
        const imgPrincipalSrc = galeriaPrincipal.src;
        const imgPrincipalAlt = galeriaPrincipal.alt;

        const imgSecundaria = event.currentTarget;
        galeriaPrincipal.src = imgSecundaria.src;
        galeriaPrincipal.alt = imgSecundaria.alt;

        imgSecundaria.src = imgPrincipalSrc;
        imgSecundaria.alt = imgPrincipalAlt;
    }

    galeriaSecundaria.forEach(img => {
        img.addEventListener("click", trocarImagem);
    });
});

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// ANIMAR ELEMENTOS
if (window.SimpleAnime) {
    new SimpleAnime();
  }
  