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
	var viewportWidth = $(window).width();

	if( viewportWidth < 992) {
		$('.toggle-info').addClass('active-info');
	}
});