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

  navMenu.classList.add("max-[992px]:translate-x-full");

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
  //   const leftImg = document.getElementById("left_img");
  //   const rightImg = document.getElementById("right_img");
  //   const disabledArrow = "./public/assets/images/gray_arrow.png";
  //   const anaibledArrow = "./public/assets/images/blue_arrow.png";
  const openMenu = document.querySelector(".nav__open");
  const openImg = document.getElementById("open-btn-img");

  rightButton.addEventListener("click", () => {
    if (slideNumber < length) {
      nextSlide();
      if (slideNumber === length) {
        rightButton.disabled = true;
        rightButton.classList.add("border-2", "border-[#eff3f8]");
        rightButton.classList.remove("bg-[#eff3f8]");
        // rightImg.src = disabledArrow;
        // rightImg.style.transform = "rotate(180deg)";
      }
      leftButton.disabled = false;
      leftButton.classList.add("bg-[#eff3f8]");
      leftButton.classList.remove("border-2", "border-[#eff3f8]");
      //   leftImg.src = anaibledArrow;
      //   leftImg.style.transform = "rotate(180deg)";
    }
  });

  leftButton.addEventListener("click", () => {
    if (slideNumber > 1) {
      prevSlide();
      if (slideNumber === 1) {
        leftButton.disabled = true;
        leftButton.classList.add("border-2", "border-[#eff3f8]");
        leftButton.classList.remove("bg-[#eff3f8]");
        // leftImg.src = disabledArrow;
        // leftImg.style.transform = "rotate(0)";
      }
      rightButton.disabled = false;
      rightButton.classList.add("bg-[#eff3f8]");
      rightButton.classList.remove("border-2", "border-[#eff3f8]");
      //   rightImg.src = anaibledArrow;
      //   rightImg.style.transform = "rotate(0)";
    }
  });

  pricingLinks.forEach((pageLink) =>
    pageLink.addEventListener("click", (e) => smoothScroll(e))
  );

  openMenu.addEventListener("click", () => {
    navMenu.classList.toggle("max-[992px]:translate-x-full");
    openImg.classList.toggle("fa-times");
    openImg.classList.toggle("text-red-600");
  });

  //   closeMenu.addEventListener("click", () => {
  //     navMenu.classList.remove("nav__list--active");
  //   });
};

fireApp();
