document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle('show'); // Show or hide nav links
    });

    closeIcon.addEventListener("click", () => {
        navLinks.classList.remove('show'); // REMOVE 'show' class when close button is clicked
    });
});
