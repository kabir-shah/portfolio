var nav = document.querySelector(".nav");
var head = document.querySelector(".head");

var headOffsetHeight = head.offsetHeight;

function detectNavLight() {
    if (nav.getBoundingClientRect().top + window.scrollY < headOffsetHeight) {
        if (!nav.classList.contains("nav-light")) {
            nav.classList.add("nav-light");
        }
    } else {
        nav.classList.remove("nav-light");
    }
}

detectNavLight();
window.addEventListener("scroll", detectNavLight);