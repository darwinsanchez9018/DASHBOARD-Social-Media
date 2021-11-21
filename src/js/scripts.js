const toggler = document.getElementById("toggler-ball");
const togglerBar = document.getElementById("toggler-bar");
const togglerText = document.getElementById("toggler-text");

// Quitando y añadiendo la clase .dark - Moviendo BALL - Cambiando el text DARK/LIGHT
const body = document.body;
togglerBar.addEventListener("click", function () {
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        togglerText.textContent = "Light Mode";
        toggler.style.transform = "translateX(26px)";
    } else {
        body.classList.add("dark");
        togglerText.textContent = "Dark Mode";
        toggler.style.transform = "translateX(0)";
    }
});