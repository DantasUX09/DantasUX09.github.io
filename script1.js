function somar1() {
  const resposta1m = parseInt(peso.value);
  const resposta2m = parseInt(altura.value) ** 2;
  const resposta3m = parseInt(resposta1m) / parseInt(resposta2m);
  const respostam = (resultado.innerHTML = resposta3m);

  const corpos1 = document.querySelector(".corpos-item1m");
  if (resposta3m <= 0.0018) {
    corpos1.classList.toggle("ativo");
  } else{
    corpos1.classList.remove("ativo");
    
  }

  const corpos2 = document.querySelector(".corpos-item2m");
  if (resposta3m > 0.0018 && resposta3m <= 0.0025) {
    corpos2.classList.toggle("ativo");
  } else {
    corpos2.classList.remove("ativo");
  }

  const corpos3 = document.querySelector(".corpos-item3m");
  if (resposta3m > 0.0025 && resposta3m <= 0.0030) {
    corpos3.classList.add("ativo");
  } else {
    corpos3.classList.remove("ativo");
  } 

  const corpos4 = document.querySelector(".corpos-item4m");
  if (resposta3m > 0.0030 && resposta3m <= 0.0035) {
    corpos4.classList.toggle("ativo");
  } else {
    corpos4.classList.remove("ativo");
  }

  const corpos5 = document.querySelector(".corpos-item5m");
  if (resposta3m > 0.0035 && resposta3m <= 0.0040) {
    corpos5.classList.toggle("ativo");
  } else {
    corpos5.classList.remove("ativo");
  }

  const corpos6 = document.querySelector(".corpos-item6m");
  if (resposta3m > 0.0041) {
    corpos6.classList.toggle("ativo");
  } 
}
