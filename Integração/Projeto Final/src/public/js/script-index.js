//SCRIPT PARA ESCONDER MENU
/*$('.menu a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 1000);
});
*/


//SCRIPT PARA ROLAGEM SUAVE
$(window).scroll(function () {
  // 100 = The point you would like to fade the nav in.

  if ($(window).scrollTop() > 450) {

    $('header').addClass('show');

  } else {

    $('header').removeClass('show');

  };
});

$('.scroll').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1500);
});




//SCRIPT PARA OS SLIDES
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}




//SCRIPTs DAS MÁSCARAS PARA CADASTRO
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}


function mtel(v) {
  v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e quinto dígitos
  return v;
}

function mcep(v){
  v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
  v=v.replace(/^(\d{5})(\d)/,"$1-$2")         //Esse é tão fácil que não merece explicações
  return v
}


function mrg(v) {
  v = v.replace(/\D/g, "");                                      //Remove tudo o que não é dígito
  v = v.replace(/(\d)(\d{7})$/, "$1.$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
  v = v.replace(/(\d)(\d{4})$/, "$1.$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
  v = v.replace(/(\d)(\d)$/, "$1-$2");               //Coloca o - antes do último dígito
  return v;
}

function mdata(v) {
  v = v.replace(/\D/g, "");                    //Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, "$1/$2");
  v = v.replace(/(\d{2})(\d)/, "$1/$2");

  v = v.replace(/(\d{2})(\d{2})$/, "$1$2");
  return v;
}

function mcpf(v) {
  v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
  //de novo (para o segundo bloco de números)
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
  return v
}

var carrinho = localStorage.getItem("carrinhoNane");
  if (carrinho == undefined){
    carrinho = {
      produto: []
    }
  }
