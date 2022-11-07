// Sexo

const sexoM = document.querySelector(".menu-item-homen button");

function ativar(event){
  const menu = event.currentTarget;
  
  const homen = document.querySelector("#homen1");
  homen.classList.toggle("ativo")
  console.log(homen)

}

sexoM.addEventListener("click", ativar)

const sexoF = document.querySelector(" .menu-item-mulher button");

function ativarF(event){
const menu =event.currentTarget;

const mulher = document.querySelector("#mulher");
mulher.classList.toggle("ativo")
}

sexoF.addEventListener("click", ativarF)
