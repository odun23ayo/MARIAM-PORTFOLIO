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