const $titulos_tabla = document.getElementById('titulos-tabla');
const $tabla = document.getElementById('tabla');
const $text_table = document.getElementById('text-table');
const $miFoto = document.getElementById('miFoto');
const $titulo = document.getElementById('texto_titulo');
const $btn_portada = document.getElementById('btn_portada');

const $btn_logosA =document.getElementsByClassName("logo-Portada")[0];
const $btn_logosR =document.getElementsByClassName("logo-Portada")[1];


const $home = document.getElementById('home');

const $secciones = document.querySelectorAll('section');

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
           /* console.log(elementoHTML) */
           
           switch (elementoHTML) {
            case "home":
                $btn_logosR.addEventListener("click", () => {
                    $titulos_tabla.scrollIntoView(true);
                })
                
                break;
            case "id-sobre-mi":
                $btn_logosA.addEventListener("click", () => {
                    $home.scrollIntoView(true);
                })
            
                break;
           }
        }
    })
};


const observador = new IntersectionObserver(cargarTabla,{
    root: null,
    rootMargin: "0px",
    threshold: 0
});
const observador2 = new IntersectionObserver(callback,{
    root: null,
    rootMargin: "0px",
    threshold: 1
});

$secciones.forEach(element => observador2.observe(element))


observador.observe($btn_portada);
observador.observe($titulo);
observador.observe($titulos_tabla);
observador.observe($tabla);
observador.observe($text_table);
observador.observe($miFoto);

/* Logos icons */
const secciones = [
    "home","id-sombre-mi","portafolio","contacto"
]




/* window.onscroll = function(){
    var y = window.scrollY;
    console.log(y);
}
 */



