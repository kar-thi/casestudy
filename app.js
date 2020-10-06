$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  
  var btn = $('#topButton');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
  });
  

  $(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-brand img').attr('src', 'images/apptomate-black.png');
        }
        if ($(this).scrollTop() < 50) {
            $('.navbar-brand img').attr('src', 'images/apptomate-white.png');
        }
    })
});

AOS.init({
    duration: 1200,
  })