var cssToggle = document.getElementById("cssShift");
var stylesheet = document.getElementById("stylesheet");

function buttonToggle(){
    cssToggle.innerHTML = "Update 1:";
    stylesheet.href = "styles/alternate.css";
};
cssToggle.innerHTML = "Special Suprise Toggle";

cssToggle.addEventListener("click", buttonToggle);
