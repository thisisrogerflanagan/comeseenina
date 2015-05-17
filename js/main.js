$(window).load(function(){

	//$(".tooltip").addClass("is-hidden");
	
	$(".js-open-nav").click(function() {
		$(".nav").addClass("show-nav");
		$(".nav").removeClass("hide-nav");
	});
	
	$(".js-close-nav").click(function() {
		$(".nav").addClass("hide-nav");
		$(".nav").removeClass("show-nav");
	});

});