document.addEventListener('DOMContentLoaded', function () {
  // ======= Mobile Menu Toggle =======
  const menuBtn = document.getElementById('menu-btn');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('backdrop');

  if (menuBtn && closeMenu && mobileMenu && backdrop) {
    function openMenu() {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      backdrop.classList.remove('hidden');
    }

    function closeMenuFn() {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFn);
    backdrop.addEventListener('click', closeMenuFn);
  }

  // ======= Image Slider (Logos) =======
  const images = ["images/Exide.png", "images/Luminous.png", "images/Amaron.png"];
  let index = 0;
  const img = document.getElementById("slide-img");

  if (img) {
    function changeImage() {
      index = (index + 1) % images.length;
      img.classList.add("opacity-0", "transition-opacity", "duration-[600ms]", "ease-in-out");

      setTimeout(() => {
        img.src = images[index];
        img.classList.remove("opacity-0");
      }, 600);
    }

    setInterval(changeImage, 1400); // 800ms delay + 600ms duration
  }

  // ======= Tab Switcher for Product Pages =======
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length && tabContents.length) {
    function activateTab(button) {
      // Reset all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove("bg-[#E90000]", "text-white");
        btn.classList.add("text-[#4D4D4D]", "hover:bg-[#E90000]", "hover:text-white");
      });

      // Set active button
      button.classList.add("bg-[#E90000]", "text-white");
      button.classList.remove("text-[#4D4D4D]", "hover:bg-[#E90000]", "hover:text-white");

      // Hide all tab contents
      tabContents.forEach(tab => tab.classList.add("hidden"));

      // Show selected tab
      const tabId = button.getAttribute("data-tab");
      const tabToShow = document.getElementById(tabId);
      if (tabToShow) {
        tabToShow.classList.remove("hidden");
      }
    }

    // Attach event listeners
    tabButtons.forEach(button => {
      button.addEventListener("click", () => activateTab(button));
    });

    // Activate first tab by default (if exists)
    activateTab(tabButtons[0]);
  }

  // ======= Project 1 Auto Fade (One Image at a Time) =======
  const carousel = document.querySelector('#carousel');

  if (carousel) {
    const slides = carousel.querySelectorAll("img");
    const totalSlides = slides.length;
    let projIndex = 0;

    // Initialize styles
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === 0 ? "1" : "0");
      slide.style.transition = "opacity 1s ease-in-out";
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.left = "0";
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.objectFit = "cover";
      slide.style.borderTopLeftRadius = "12px";
      slide.style.borderTopRightRadius = "12px";
      slide.style.borderBottomLeftRadius = "12px";
      slide.style.borderBottomRightRadius = "12px";
    });

    function showProjSlide(i) {
      slides.forEach((slide, j) => {
        slide.style.opacity = (j === i ? "1" : "0");
      });
    }

    function nextProjSlide() {
      projIndex = (projIndex + 1) % totalSlides;
      showProjSlide(projIndex);
    }

    setInterval(nextProjSlide, 3000);
    showProjSlide(projIndex);
  }

  // ======= Project 2 Auto Fade (One Image at a Time) =======
  const carousel2 = document.querySelector('#carousel2');

  if (carousel2) {
    const slides2 = carousel2.querySelectorAll("img");
    const totalSlides2 = slides2.length;
    let proj2Index = 0;

    // Initialize styles
    slides2.forEach((slide, i) => {
      slide.style.opacity = (i === 0 ? "1" : "0");
      slide.style.transition = "opacity 1s ease-in-out";
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.left = "0";
      slide.style.width = "100%";
      slide.style.height = "100%";
      slide.style.objectFit = "cover";
      slide.style.borderTopLeftRadius = "12px";
      slide.style.borderTopRightRadius = "12px";
      slide.style.borderBottomLeftRadius = "0"; // no bottom-left
      slide.style.borderBottomRightRadius = "0"; // no bottom-right
    });

    function showProj2Slide(i) {
      slides2.forEach((slide, j) => {
        slide.style.opacity = (j === i ? "1" : "0");
      });
    }

    function nextProj2Slide() {
      proj2Index = (proj2Index + 1) % totalSlides2;
      showProj2Slide(proj2Index);
    }

    setInterval(nextProj2Slide, 3000);
    showProj2Slide(proj2Index);
  }
});
