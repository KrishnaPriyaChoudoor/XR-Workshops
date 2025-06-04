const images = [
  {
    src: "./assets/catdp.png",
    desc: "Catto",
  },
  {
    src: "./assets/dogdp.png",
    desc: "Doggo",
  },
  {
    src: "./assets/plantdp.png",
    desc: "Planto",
  },
];

let currentIndex = 0;

const imgEl = document.querySelector("#carouselImage");
const textEl = document.querySelector("#carouselText");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

function updateCarousel() {
  imgEl.setAttribute("src", images[currentIndex].src);
  textEl.setAttribute("value", images[currentIndex].desc);
}
