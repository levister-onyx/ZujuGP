/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

$('.shopify-currency-form select').on('change', function() {
    $(this)
      .parents('form')
      .submit();
  });

/* Main Menu */
  /**
   * Hide top navigation on scroll down
   */
/*
(function($) {

  var pageScroll = function(e) {
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.zuju-header').outerHeight();

      $(window).scroll(function(e) {
          didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      });

      function hasScrolled() {
          var st = $(this).scrollTop();
          var navbarHeight = $('.zuju-header').outerHeight();

          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - st) <= delta)
              return;

          // If they scrolled down and are past the navbar, add class .main-navigation
          // This is necessary so you never see what is "behind" the navbar
          if (st > lastScrollTop && st > navbarHeight) {
              // Scroll down
              //$('.zuju-header').removeClass('nav-down').addClass('nav-up');
              $('.zuju-header').removeClass('nav-site-header--fixed');
          } else {
              // Scroll up
              if (st + $(window).height() < $(document).height()) {
                  //$('.zuju-header').removeClass('nav-up').addClass('nav-down');
                  $('.zuju-header').addClass('nav-site-header--fixed');
              }
          }

          lastScrollTop = st;
      }
  }

  // Call the created function
  pageScroll();
})(jQuery);
*/

/* */

// Off canvas
function offCanvasEffect (bool = false) {
    const tl = gsap.timeline({})
    return tl.to('.off-canvas', {
      duration: 0.5,
      ease: Power2.easeInOut,
      x: 0
    })
  }
  
  function offCanvasOut () {
    gsap.to('.off-canvas', {
      duration: 0.5,
      ease: Power2.easeInOut,
      x: '-100%'
    })
  }
  
  $('.burger-menu').on('click', e => {
    e.stopPropagation()
    offCanvasEffect()
  })
  
  $('.off-canvas')
    .find('svg')
    .on('click', () => offCanvasOut())
  
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.off-canvas')) {
      offCanvasOut()
    }
  })