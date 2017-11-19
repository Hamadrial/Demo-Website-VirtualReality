$(document).ready(function () {
  
  // Scroll to target element
  $("[scroll-to]").click(function () {
    var $this = $(this),
      $toElement = $this.attr('scroll-to'),
      $offset = $this.attr('scroll-offset') * 1 || 0,
      $speed = $this.attr('scroll-speed') * 1 || 500;

    $('html, body').animate({
      scrollTop: $($toElement).offset().top + $offset
    }, $speed);
  });

  // Highlight when scroll
  $(document).scroll(function () {
    var scrollTop = $(document).scrollTop();
    var offset = 100;
    var homeSection = $('.header').offset().top;
    var aboutSection = $('.about').offset().top - offset;
    var resourcesSection = $('.main-content').offset().top - offset;

    function addActiveStyle(className) {
      $(className).addClass('main-nav__link-active');
    }

    function removeActiveStyle(className) {
      $(className).removeClass('main-nav__link-active');
    }
    
    if (scrollTop > homeSection && scrollTop < aboutSection) {
      addActiveStyle('.homeSect');
      removeActiveStyle('.aboutSect');
    } else if (scrollTop >= aboutSection && scrollTop < resourcesSection) {
      removeActiveStyle('.homeSect');
      addActiveStyle('.aboutSect');
      removeActiveStyle('.resourcesSect');
    } else if (scrollTop >= resourcesSection) {
      removeActiveStyle('.aboutSect');
      addActiveStyle('.resourcesSect');
    } else {
      removeActiveStyle('.homeSect');
    }
  });
});

