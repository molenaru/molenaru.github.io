window.onload = function () {
    window.addEventListener('scroll',function (e){
        if (window.pageYOffset > 100){
            document.querySelector("header").classList.add('is-scrolling');
        }else{
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    
    
}

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
    
      slides[currentSlide].style.display = 'none';
      dots[currentSlide].classList.remove('active');
    
      slides[index].style.display = 'block';
      dots[index].classList.add('active');
    
      currentSlide = index;
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    // Show the initial slide (you can change this to any desired index)
    showSlide(currentSlide);
    
    // Add event listeners for arrow buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  });
  
