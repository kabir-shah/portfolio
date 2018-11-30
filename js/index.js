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

// Hidden secret
var secret = false;
window.addEventListener("click", function(event) {
    if (!secret && event.detail === 3) {
        secret = true;
        
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        
        canvas.classList.add("secret-canvas");
        document.body.appendChild(canvas);
        document.body.style.fontFamily = "Comic Sans MS";
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        var previousX, previousY;
        
        function placeDot(event) {
            if (!previousX) {
                previousX = event.offsetX;
                previousY = event.offsetY;
            }
            
            context.beginPath();
            context.moveTo(previousX, previousY);
            context.lineTo(event.offsetX, event.offsetY);
            context.strokeStyle = "#FFFFFF";
            context.stroke();
            
            previousX = event.offsetX;
            previousY = event.offsetY;
        }
        
        canvas.addEventListener("mousedown", placeDot);
        canvas.addEventListener("mousemove", placeDot);
    }
});