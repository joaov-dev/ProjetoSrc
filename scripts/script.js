function abreMenu() {
  var x = document.getElementById("burguer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function muda_cor(el){
  var image = el.querySelector('img.check')
  if (image.src.match('check_vermelho')){
      image.src = '../imgs/check_verde.png'
  }
  else{
      image.src = '../imgs/check_vermelho.png'
  }
}

function mudar_img(el){
  var image = el.querySelector('img.check')
  if (image.src.match('coracao')){
      image.src = '../imgs/vermelho.png'
  }
  else{
      image.src = '../imgs/coracao.png'
  }
}
  