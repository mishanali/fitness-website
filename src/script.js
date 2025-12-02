const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-y-0');
        if (isOpen) {
          mobileMenu.classList.remove('translate-y-0', 'opacity-100');
          mobileMenu.classList.add('-translate-y-full', 'opacity-0');
          menuBtn.textContent = "☰";
          menuBtn.style.backgroundColor = "black";
        } else {
          mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
          mobileMenu.classList.add('translate-y-0', 'opacity-100');
          menuBtn.textContent = "✕";
          menuBtn.style.backgroundColor = "#4c00ff";
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

// testimonial

const slider = document.getElementById("testimonialSlider");
        const slides = slider.children.length;
        const next = document.getElementById("nextBtn");
        const prev = document.getElementById("prevBtn");
        let index = 0;

        function showSlide(i) {
            index = (i + slides) % slides;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        next.addEventListener("click", () => showSlide(index + 1));
        prev.addEventListener("click", () => showSlide(index - 1));

        setInterval(() => showSlide(index + 1), 2000);
