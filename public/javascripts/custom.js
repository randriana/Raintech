$('#toggle').click(function() {
	$(this).toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});

$('.nav-link').click(function() {
	$('#toggle').toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});

$('.toggle-info').click(function() {
	$(this).toggleClass('active-info');
});

$(document).ready(function() {
	

	if( viewportWidth < 992) {
		$('.toggle-info').addClass('active-info');
	}

	/* deactivate background on iOS devices */
	if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		$('#hero1, #hero2, #hero3').addClass('background-none');
	}
});

$(window).resize(function() {
	var viewportWidth = $(window).width();

	if( viewportWidth < 992) {
		$('.toggle-info').addClass('active-info');
	} else if (viewportWidth >= 992) {
		$('.toggle-info').removeClass('active-info');
	}
});