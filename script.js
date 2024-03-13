window.onload = function() {
  window.addEventListener('scroll', function(e) {
      const header = document.querySelector("header");
      if (window.pageYOffset > 100) {
          header.classList.add('is-scrolling');
      } else {
          header.classList.remove('is-scrolling');
      }
  });

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  const navigasi = document.querySelector('.navigasi');


  menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      navigasi.classList.toggle('is-active');
  });
}
