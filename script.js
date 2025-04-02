function searchFunction(params) {
    let input = document.getElementById("searchBox").ariaValueMax.toLowerCase()
    let items = document.querySelectorAll(".item")
}
let lastScrollY = window.scrollY;
window.addEventListener("scroll",function() {
    let nav = 
    document.getElementById("navbar")
    ;
    if (!nav) return;
    if (Window.scrollY > 50) {
        nav.classList.add("scrolled"); 
    } else {
        nav.classList.remove("scrolled");
    }
    if(window.scrollY > 
        lastScrollY) {
         nav.classList.add("hidden")
        } else{
            nav.classList.remove("hidden")
    }
    lastScrollY = window.scrollY;
});
const text = "Adekunle Mariam";
let index = 0;

function typeEffect() {
    Document.getElementById("typing-text").innerText = text.slice(0,index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect,150)
    }
}
window.onload = typeEffect;