// Sexo

const sexoM = document.querySelector(".menu-item-homen button");

function ativar(event) {
  const menu = event.currentTarget;

  const mulher = document.querySelector("#mulher");
  const homen = document.querySelector("#homen1");
  homen.classList.toggle("ativo");
  mulher.classList.remove("ativo");
  console.log(homen);
}

sexoM.addEventListener("click", ativar);

const sexoF = document.querySelector(" .menu-item-mulher button");

function ativarF(event) {
  const menu = event.currentTarget;

  const homen = document.querySelector("#homen1");
  const mulher = document.querySelector("#mulher");
  mulher.classList.toggle("ativo");
  homen.classList.remove("ativo");
}

sexoF.addEventListener("click", ativarF);

// Animção

new SimpleAnime();

// aplicação

var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");
var resultado = document.querySelector("span");

function somar() {
  const resposta1 = parseInt(peso.value);
  const resposta2 = parseInt(altura.value) ** 2;
  const resposta3 = parseInt(resposta1) / parseInt(resposta2);
  const resposta = (resultado.innerHTML = resposta3);

  const corpos1 = document.querySelector(".corpos-item1");
  if (resposta3 < 0.0018) {
    corpos1.classList.toggle("ativo");
  }

  const corpos2 = document.querySelector(".corpos-item2");
  if (resposta3 > 0.0018 && resposta3 < 0.0025) {
    corpos2.classList.toggle("ativo");
  }

  const corpos3 = document.querySelector(".corpos-item3");
  if ((resposta3 > 0.0025) && (resposta3 < 0.003)) {
    corpos3.classList.toggle("ativo");
  }

  const corpos4 = document.querySelector(".corpos-item4");
  if ((resposta3 > 0.0031) && (resposta3 < 0.0035)) {
    corpos4.classList.toggle("ativo");
  }

  const corpos5 = document.querySelector(".corpos-item5");
  if ((resposta3 > 0.0035) && (resposta3 < 0.004)) {
    corpos5.classList.toggle("ativo");
  }

  const corpos6 = document.querySelector(".corpos-item6");
  if (resposta3 > 0.004) {
    corpos6.classList.toggle("ativo");
  }
}
