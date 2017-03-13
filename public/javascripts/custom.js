$('#toggle').click(function() {
	$(this).toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});

$('.nav-link').click(function() {
	$('#toggle').toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});

$(document).ready(function() {
	var viewportWidth = $(window).width();	

	if( viewportWidth < 992) {
		$('.toggle-info').addClass('active-info');
	}

	/* deactivate background on iOS devices */
	if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		$('#hero1, #hero2, #hero3').addClass('background-none');

		/* ensures that active-info is on even for viewports > 992 */
		$('.toggle-info').addClass('active-info');
	}


	/* set logo to visible after 1.5 sec */
	setTimeout(function(){
		$('.fadein').addClass("element-visible");
	}, 2000);
});

window.sr = ScrollReveal();
	sr.reveal('.brand-logo', { 
		duration: 500,
		origin: 'right',
		distance: '50px',
		delay: 500,
		easing: 'ease'
	});

	sr.reveal('.fadein', { 
		duration: 1000,
		delay: 500,
		easing: 'ease',
		viewFactor: 1,
	});

	sr.reveal('.image-container', {
		duration: 1000,
		viewFactor: 0.5,
	},500);

	sr.reveal('.form-container', { 
		duration: 1000,
		delay: 500,
		easing: 'ease',
	});

/* activates responsive versjon when resizing beyond breakpoint */
$(window).resize(function() {
	var viewportWidth = $(window).width();

	if( viewportWidth < 992) {
		$('.toggle-info').addClass('active-info');
	} else if (viewportWidth >= 992) {
		$('.toggle-info').removeClass('active-info');
	}
});