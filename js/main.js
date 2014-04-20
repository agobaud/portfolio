$(document).ready(function() {
	$('.grid-element').hover(function (){
		$(this).fadeTo("slow", 0.5);
	}, function(){
		$(this).fadeTo("fast", 1);
	});

	var width = $(window).width() - 25; 
		$("#header-img-wrap").width(width);

});



