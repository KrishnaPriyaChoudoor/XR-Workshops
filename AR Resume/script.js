const images = [
        {
          src: "https://cdn.glitch.global/21e82aee-8605-452a-bcfd-607fd0017347/catdp.png?v=1747979842865",
          desc: "Catto"
        },
        {
          src: "https://cdn.glitch.global/21e82aee-8605-452a-bcfd-607fd0017347/dogdp.png?v=1747984699972",
          desc: "Doggo"
        },
        {
          src: "https://cdn.glitch.global/21e82aee-8605-452a-bcfd-607fd0017347/plantdp.png?v=1747984693477",
          desc: "Planto"
        }
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
