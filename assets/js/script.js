const navBar = document.getElementsByTagName("nav")[0];

const updateNavBar = () => {
    if (window.scrollY >= 48) {
        navBar.classList.add("navbar-fixed");
    } else {
        navBar.classList.remove("navbar-fixed");
    }
};

window.addEventListener("wheel", updateNavBar);
window.addEventListener("scroll", updateNavBar);
