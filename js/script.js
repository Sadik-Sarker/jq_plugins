$(document).ready(function(){
	// back to top
	$('.back_to_top').click(function(){
		$('html, body').animate({scrollTop:0}, 5000);
	});
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling > 100){
			$('.back_to_top').fadeIn(500);
		}
		else{
			$('.back_to_top').fadeOut(500);
		}
		if(scrolling > 150){
			$('.custom_navbar').addClass('bg');
		}
		else{
			$('.custom_navbar').removeClass('bg');
		}
	});
    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // typed js
    $(".typed").typed({
		strings: ["Web Designer.", "Web Developer.", "React Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	// wow js
	new WOW().init();
	// count down
	$("#getting-started-month")
  .countdown("2022/05/22", function(event) {
    $(this).html(
      event.strftime('%m <span>months</span>')
    );
  });
	$("#getting-started-day")
  .countdown("2022/05/22", function(event) {
    $(this).html(
      event.strftime('%d <span>days</span> ')
    );
  });
	$("#getting-started")
  .countdown("2022/05/22", function(event) {
    $(this).html(
      event.strftime('%H:%M:%S')
    );
  });

});