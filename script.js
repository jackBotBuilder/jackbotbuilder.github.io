var cssToggle = document.getElementById("cssShift");
var stylesheet = document.getElementById("stylesheet");

function buttonToggle(){
    cssToggle.innerHTML = "Flurkin Kitty!!!";
    stylesheet.href = "styles/other.css";
};
cssToggle.innerHTML = "Special Suprise Toggle";

cssToggle.addEventListener("click", buttonToggle);
