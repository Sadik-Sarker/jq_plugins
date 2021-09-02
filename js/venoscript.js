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
	//   venobox gallery
	$('.venobox').venobox({
	titleattr: 'data-title',
	border     : '5px',
    bgcolor    : '#FFC107',
    titleattr  : 'data-title',
    numeratio  : true,
    infinigall : true,
	spinner : 'cube-grid',
	spinColor : '#FFC107',
	closeColor : '#FFC107',
	arrowsColor : '#FFC107',
	titleColor : '#FFC107',
    share      : ['facebook', 'twitter', 'linkedin']
	});


});