$(document).ready(function() {
  $('.parallax').parallax();
  
    $('.carousel.carousel-slider').carousel({ indicators: true });
    $('.carousel.carousel-slider').carousel({ fullWidth: false });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4000);
    }

 });
