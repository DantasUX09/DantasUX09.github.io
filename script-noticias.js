const adolphe = document.querySelector(".bio");

 
function ativar(event) {
  const menu = event.currentTarget;

  const bio = document.querySelector(".Adolphe");

  bio.classList.add("ativoover");
}

function ativarOut(event) {
  const menu = event.currentTarget;

  const bio = document.querySelector(".Adolphe");

  bio.classList.remove("ativoover");
}

adolphe.addEventListener("mouseout", ativarOut);

adolphe.addEventListener("mouseover", ativar);


