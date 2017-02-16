$('#toggle').click(function() {
	$(this).toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});

$('.nav-link').click(function() {
	$('#toggle').toggleClass('active');
  	$('#nav-overlay').toggleClass('open');
});