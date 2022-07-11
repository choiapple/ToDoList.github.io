const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];


const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.prepend(bgImage); // append는 가장 뒤에 prepend는 가장 앞에 추가
