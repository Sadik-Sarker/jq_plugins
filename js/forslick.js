$(document).ready(function(){
    $(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling > 100){
			$('.custom_navbar').addClass('bg');
		}
		else{
			$('.custom_navbar').removeClass('bg');
		}
	});
// slick slider
$('.autoplay').slick({
    dots: true,
    arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
  });

});