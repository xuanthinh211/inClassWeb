let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // 2 giây đổi 1 ảnh
}

showSlides();





const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
});
