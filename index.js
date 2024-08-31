
document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-image');
    const nextBtn = document.querySelector('.carousel-control.next');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const dots = document.querySelectorAll('.dot');
    const fallbackImage = 'https://img.freepik.com/free-vector/flat-style-bankruptcy-concept_23-2148494922.jpg?t=st=1725103503~exp=1725104103~hmac=7d6127f4dcb093104627ea5f9143b554797716362acf562b1d1639c4f340585b';  

    let currentIndex = 0;


    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });


    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });


    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });


    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = fallbackImage;
        });
    });

    updateCarousel();
});
