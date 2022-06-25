const $titulos_tabla = document.getElementById('titulos-tabla');
const $tabla = document.getElementById('tabla');
const $text_table = document.getElementById('text-table');
const $miFoto = document.getElementById('miFoto');
const $titulo = document.getElementById('texto_titulo');
const $btn_portada = document.getElementById('btn_portada');

const cargarTabla = (entradas) =>{
    
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            setTimeout(() => {
            entrada.target.classList.add("visible")
        }, 1000);
            } else {
                entrada.target.classList.remove("visible")
            }
        });
}

const observador = new IntersectionObserver(cargarTabla,{
    root: null,
    rootMargin: "0px",
    threshold: 1
});
observador.observe($btn_portada);
observador.observe($titulo);
observador.observe($titulos_tabla);
observador.observe($tabla);
observador.observe($text_table);
observador.observe($miFoto);