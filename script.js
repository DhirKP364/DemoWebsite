function startSurprise() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    // Create floating hearts
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

const images = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg"
];

let index = 0;
const slider = document.querySelector(".background-slider");

function changeBackground() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000);
changeBackground();

function startSurprise() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    // Floating hearts
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
