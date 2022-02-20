const images = ["0.jfif", "1.jfif", "2.jfif", "3.jfif"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImg");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);