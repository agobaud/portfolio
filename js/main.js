function scrollToElement(elementID){
	var top = $(elementID).position().top - $('.nav').height();
	// $(window).scrollTop( top );

	$('html, body').animate({
        scrollTop: top + 'px'
    }, 'fast');
}

$(document).ready(function () {
	$('.grid-element').hover(function (){
		$(this).fadeTo("slow", 0.5);
	}, function(){
		$(this).fadeTo("fast", 1);
	});

	var width = $(window).width() - 25; 
	$("#header-img-wrap").width(width);

	$('.chevron').on('click', function(){
		scrollToElement('.work-container');
	})

	$('.nav li a').on('click', function(){
		goTo = $(this).attr('id');
		if (goTo == "resume"){
			return;
		}

		scrollToElement("." + goTo + "-container");
	})

});



