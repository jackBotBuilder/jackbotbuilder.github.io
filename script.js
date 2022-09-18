var cssToggle = document.getElementById("cssShift");
var stylesheet = document.getElementById("stylesheet");

function buttonToggle(){
    if (cssToggle.innerHTML == "Normal Css"){
    cssToggle.innerHTML = "Special Surprise Toggle";
    stylesheet.href = "styles/style.css";
    }
    else {
    cssToggle.innerHTML = "Normal Css";
    stylesheet.href = "styles/alternate.css";}
    
};


cssToggle.addEventListener("click", buttonToggle);
