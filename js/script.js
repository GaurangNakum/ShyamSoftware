/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  // navbarDropdown
  $('#navigation .dropdown-toggle').on('click', function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    }
  });

  //Hero Slider
  var $heroSlider = $('.hero-slider');
  $heroSlider.slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: true,
    autoplaySpeed: 7000,
    speed: 800,
    cssEase: 'ease-in-out',
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  // filter
  setTimeout(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 150
  });

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this);
        if ($this.hasClass('animated')) return;
        $this.addClass('animated');

        var countTo = $this.attr('data-count');
        $this.text('0');

        $({
          countNum: 0
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $('.navigation').addClass('sticky-header');
    } else {
      $('.navigation').removeClass('sticky-header');
    }
  });

  /* ========================================================================= */
  /*  Global Floating WhatsApp Widget
  /* ========================================================================= */
  $(document).ready(function () {
    var waUrl = "https://wa.me/917016146191?text=Hi%20%0D%0AI%20m%20Interested%20in%20a%20Demo";
    var waHtml = '<a href="' + waUrl + '" target="_blank" class="floating-wa-btn" aria-label="Chat on WhatsApp">' +
      '<i class="tf-ion-social-whatsapp"></i></a>';

    // Inject the HTML
    $('body').append(waHtml);

    // Inject the CSS styles
    var waStyle = '<style>' +
      '.floating-wa-btn {' +
      '  position: fixed;' +
      '  bottom: 30px;' +
      '  right: 30px;' +
      '  background-color: #25d366;' +
      '  color: white !important;' +
      '  border-radius: 50%;' +
      '  width: 60px;' +
      '  height: 60px;' +
      '  display: flex;' +
      '  align-items: center;' +
      '  justify-content: center;' +
      '  font-size: 35px;' +
      '  box-shadow: 2px 2px 15px rgba(0,0,0,0.2);' +
      '  z-index: 9999;' +
      '  transition: transform 0.3s ease;' +
      '  animation: pulse-wa 2s infinite;' +
      '}' +
      '.floating-wa-btn:hover {' +
      '  transform: scale(1.1);' +
      '}' +
      '@keyframes pulse-wa {' +
      '  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }' +
      '  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }' +
      '  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }' +
      '}' +
      '</style>';
    $('head').append(waStyle);
  });

})(jQuery);

