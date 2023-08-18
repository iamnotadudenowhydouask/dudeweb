var togglebutton = document.getElementById('navbar-toggle');
var navbar = document.querySelector(".navbar");

togglebutton.addEventListener("click", function(){
    if(navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});

navbar.addEventListener("click", function(){
    if(navbar.style.display === "flex") {
        navbar.style.display = "none";
    }
});
