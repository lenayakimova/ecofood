
$(document).ready(function(){
    $('.sliderA').slick({
      prevArrow: $('.blockI-arrows__left'),
      nextArrow: $('.blockI-arrows__right'),
      speed: 800
    });
  });

$(document).ready(function(){
    $('.sliderB-block').slick({
      prevArrow: $('.sliderB-arrows__left'),
      nextArrow: $('.sliderB-arrows__right'),
      speed: 800,
      autoplay: true,
      autoplaySpeed: 4000
    });
  });

$(document).ready(function(){
    $('.sliderC__slider').slick({
      prevArrow: $('.sliderC-arrows__left'),
      nextArrow: $('.sliderC-arrows__right'),
      speed: 800
      });
  });