document.addEventListener("DOMContentLoaded", function () {
    createStars();
});

function createStars() {
    const galaxy = document.querySelector(".star-bc");

    for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        galaxy.appendChild(star);
    }
}
