document.addEventListener("DOMContentLoaded", function() {
    const paginationLinks = document.querySelectorAll('.pagination-link');

    paginationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remover la clase 'active' de todos los enlaces de paginación
            paginationLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Agregar la clase 'active' solo al enlace que se ha hecho clic
            this.classList.add('active');
        });

        // Verificar si la URL del enlace de paginación coincide con la URL de la página actual
        if (window.location.href === link.href) {
            // Si coincide, marcar este enlace como activo
            link.classList.add('active');
        } else {
            // Si no coincide, asegurarse de que este enlace no tenga la clase 'active'
            link.classList.remove('active');
        }
    });
});