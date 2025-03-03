// función que te redirige a otra url.
function redirectToDescription(url) {
    window.location.href = url;
}

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 5 + 5 + "s"; // Duración aleatoria entre 5 y 10 segundos
    particle.style.animationDelay = Math.random() * 2 + "s"; // Retraso aleatorio hasta 2 segundos
    document.getElementById("particles").appendChild(particle);

    // Eliminar la partícula después de la animación
    setTimeout(() => {
        particle.remove();
    }, 12000); // Tiempo suficiente para la duración y el retraso
}

// Crear partículas continuamente
setInterval(createParticle, 500); // Crear una partícula cada 500ms

// Mostrar el menú al hacer clic en el engranaje
document.getElementById("settings-icon").addEventListener("click", function () {
    const menu = document.getElementById("settings-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
