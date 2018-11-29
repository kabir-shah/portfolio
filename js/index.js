// Get DOM elements for the navigation and header
var nav = document.querySelector(".nav");
var head = document.querySelector(".head");

var headOffsetHeight = head.offsetHeight;

function detectNavLight() {
    if (nav.getBoundingClientRect().top + window.scrollY < headOffsetHeight) {
        // If the top of the navigation is over the header, make the links light to ensure readability
        if (!nav.classList.contains("nav-light")) {
            nav.classList.add("nav-light");
        }
    } else {
        // If the top of the navigation is under the header, make the links dark to ensure readability
        nav.classList.remove("nav-light");
    }
}

// Check at the beginning and when the user scrolls
detectNavLight();
window.addEventListener("scroll", detectNavLight);