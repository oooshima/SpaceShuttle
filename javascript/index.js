$(function() {
	$('.mainSlide').slick({
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    fade: true,
  });

  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
