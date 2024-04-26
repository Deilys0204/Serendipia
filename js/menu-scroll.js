/* Este script permite crear un menú donde al hacer clic en un enlace, la página se desplazará suavemente
a la sección correspondiente*/

// Selecciona todos los elementos de anclaje 'a' dentro del elemento con la clase "menu-rosa"
const menuLinks = document.querySelectorAll(".menu-rosa a");

// Recorre cada enlace en la lista 'enlacesMenu'
menuLinks.forEach((link) => {
  //Se agrega un detector de eventos a cada enlace*/
  link.addEventListener("click", (e) => {
    e.preventDefault(); 

    const targetSection = document.getElementById(e.target.getAttribute("href").substring(1));

    targetSection.scrollIntoView({
      behavior: "smooth", //Inserta animación de desplazamiento suave
      block: "start", //Alinea la parte superior de la sección con la parte superior de la parte visible
    });
  });
});