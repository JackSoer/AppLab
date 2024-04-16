import "./style.css";

const slider = document.querySelector(".drag__slide");
const slides = document.querySelectorAll(".drag__slider-desc");
const navMenu = document.querySelector(".nav__list");
let slideNumber = 1;
const length = slides.length;

const nextSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  scrollSize = 270;

  slider.style.transform = `translateX(-${slideNumber * scrollSize}px)`;
  slideNumber++;
};

const prevSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  scrollSize = 270;

  slider.style.transform = `translateX(-${(slideNumber - 2) * scrollSize}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  scrollSize = 270;

  slider.style.transform = `translateX(-${(length - 1) * scrollSize}px)`;
  slideNumber = length;
};

const smoothScroll = (event) => {
  event.preventDefault();
  const openImg = document.getElementById("open-btn-img");

  navMenu.classList.add("max-[1200px]:translate-x-full");
  openImg.classList.remove("fa-times");
  openImg.classList.remove("text-red-600");
  document.body.classList.remove("h-screen");
  document.body.classList.remove("w-screen");
  document.body.classList.remove("overflow-y-hidden");

  const targetId = event.currentTarget.getAttribute("href").substring(0);
  console.log(targetId);

  const targetElement = document.getElementById(targetId);

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
};

const fireApp = () => {
  const pricingLinks = document.querySelectorAll(".page-link");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const openMenu = document.querySelector(".nav__open");
  const openImg = document.getElementById("open-btn-img");
  const accs = document.querySelectorAll(".acc");

  rightButton.addEventListener("click", () => {
    if (slideNumber < length) {
      nextSlide();

      if (slideNumber === length) {
        rightButton.disabled = true;
        rightButton.classList.add("border-2", "border-[#eff3f8]");
        rightButton.classList.remove("bg-[#eff3f8]");
      }

      leftButton.disabled = false;
      leftButton.classList.add("bg-[#eff3f8]");
      leftButton.classList.remove("border-2", "border-[#eff3f8]");
    }
  });

  leftButton.addEventListener("click", () => {
    if (slideNumber > 1) {
      prevSlide();

      if (slideNumber === 1) {
        leftButton.disabled = true;
        leftButton.classList.add("border-2", "border-[#eff3f8]");
        leftButton.classList.remove("bg-[#eff3f8]");
      }

      rightButton.disabled = false;
      rightButton.classList.add("bg-[#eff3f8]");
      rightButton.classList.remove("border-2", "border-[#eff3f8]");
    }
  });

  pricingLinks.forEach((pageLink) =>
    pageLink.addEventListener("click", (e) => smoothScroll(e))
  );

  openMenu.addEventListener("click", () => {
    navMenu.classList.toggle("xl:translate-x-full");
    openImg.classList.toggle("fa-times");
    openImg.classList.toggle("text-red-600");
    document.body.classList.toggle("h-screen");
    document.body.classList.toggle("w-screen");
    document.body.classList.toggle("overflow-y-hidden");
  });

  accs.forEach((acc) => {
    const button = acc.querySelector("button");
    const header = acc.querySelector("h4");
    const p = acc.nextElementSibling;

    button.addEventListener("click", (e) => {
      const img = button.querySelector("img");
      const i = button.querySelector("div");

      p.classList.toggle("h-0");
      p.classList.toggle("opacity-0");
      p.classList.toggle("mt-4");
      header.classList.toggle("!font-semibold");
      img.classList.toggle("hidden");
      i.classList.toggle("hidden");
    });
  });

  //   closeMenu.addEventListener("click", () => {
  //     navMenu.classList.remove("nav__list--active");
  //   });
};

fireApp();
