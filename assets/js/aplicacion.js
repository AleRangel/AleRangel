const $titulos_tabla = document.getElementById('titulos-tabla');
const $tabla = document.getElementById('tabla');
const $text_table = document.getElementById('text-table');
const $miFoto = document.getElementById('miFoto');
const $titulo = document.getElementById('texto_titulo');
const $btn_portada = document.getElementById('btn_portada');

const $btn_logosA =document.getElementsByClassName("logo-Portada")[0];
const $btn_logosR =document.getElementsByClassName("logo-Portada")[1];

const $skills = document.getElementById('skills');



const $secciones = document.querySelectorAll('section');

const $home = document.getElementById('home');

const $sobreMi = document.getElementById('id-sobre-mi');

const $contacto = document.getElementById('contact');
const $contactoform = document.getElementById('contact-form');

let elementoHTML = [];

const cargarTabla = (entradas) =>{
    /* console.log(entradas); */
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            setTimeout(() => {
            entrada.target.classList.add("visible")
        }, 500);
            } else {
                entrada.target.classList.remove("visible")
            }
        });
}

const callback = (entries) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {            
           elementoHTML =(entry.target.id) 
           console.log(elementoHTML, "xd")
           
           switch (elementoHTML) {
            case "home":
                $btn_logosR.addEventListener("click", () => {
                    $sobreMi.scrollIntoView(true);
                })
                
                
                break;
            case "id-sobre-mi":               

                $btn_logosR.addEventListener("click", () => {
                    $skills.scrollIntoView(true);
                })

                $btn_logosA.addEventListener("click", () =>{
                    $home.scrollIntoView(true);
                });
               break;
            case "skills-section":               

                console.log(elementoHTML);
                $btn_logosR.addEventListener("click", () => {
                    $contactoform.scrollIntoView(true);
                })

                $btn_logosA.addEventListener("click", () => {
                    $sobreMi.scrollIntoView(true);
                })
               break;

            
           }
        }
    })
};


const observador = new IntersectionObserver(cargarTabla,{
    root: null,
    rootMargin: "0px",
    threshold: .5
});
const observador2 = new IntersectionObserver(callback,{
    root: null,
    rootMargin: "0px",
    threshold: .5
});

$secciones.forEach(element => observador2.observe(element))


observador.observe($btn_portada);
observador.observe($titulo);
observador.observe($titulos_tabla);
observador.observe($tabla);
observador.observe($text_table);
observador.observe($miFoto);
observador.observe($skills);
observador.observe($contacto)

/* Logos icons */





/* window.onscroll = function(){
    var y = window.scrollY;
    console.log(y);
}
 */

/* Formulario */

$(document).ready(function(){
	//material contact form
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
      /* console.log(targetItem); */
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})
	
});

