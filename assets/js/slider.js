document.addEventListener("DOMContentLoaded", function() {
    // Load Slick library
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    script.onload = function() {
      // Initialize the slider
      $(".image-slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    // Bind external buttons to slider
    $('.slick-prev').on('click', function() {
      $('.image-slider').slick('slickPrev');
    });

    $('.slick-next').on('click', function() {
      $('.image-slider').slick('slickNext');
    });
    };
    document.body.appendChild(script);
  });
  