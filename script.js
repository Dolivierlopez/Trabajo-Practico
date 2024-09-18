document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function activateLink(e) {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    }

    navLinks.forEach(link => link.addEventListener('click', activateLink));

    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});