// Close top bar
        document.querySelector('.close-btn').onclick = () => {
            document.querySelector('.top-bar').style.display = 'none';
            localStorage.setItem('topBarClosed', 'true');
        };
        if (localStorage.getItem('topBarClosed')) {
            document.querySelector('.top-bar').style.display = 'none';
        }

        // SMOOTH SLIDER
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;

        function showSlide(n) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slideIndex = (n + totalSlides) % totalSlides;
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }

        function nextSlide() { showSlide(slideIndex + 1); }
        function prevSlide() { showSlide(slideIndex - 1); }

        document.querySelector('.next').onclick = nextSlide;
        document.querySelector('.prev').onclick = prevSlide;

        // Auto play every 15 seconds
        setInterval(nextSlide, 15000);

        // Manual dot click
        window.currentSlide = function(n) {
            showSlide(n);
            clearInterval(autoPlay); // optional: reset timer
            autoPlay = setInterval(nextSlide, 15000);
        };

        // Start
        showSlide(0);

        //Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.mobile-close');

    // Open menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Close menu (X button or overlay click)
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });