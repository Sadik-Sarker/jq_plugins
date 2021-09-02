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
    // mixitup
	var mixer = mixitup('.box-list');
	// lightbox
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	  });

});