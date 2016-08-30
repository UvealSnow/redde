$(document).ready(function () {
	$(".slider__image").imagefill();
	$("div[class^='featured--image']").imagefill();

	$('a[href*="#"]:not([href="#"])').click(function() {
		$(".navbar__links").removeClass('active');
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	      		var scrollTarget = target.offset().top - 75;
	        	$('html, body').animate({ scrollTop: scrollTarget }, 1000);
	        	return false;
	      	}
	    }
	});

	$("#display-menu").click(function (e) {
		e.preventDefault();
		$(".navbar__links").toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var cont = $("#display-menu");
		if (!cont.is(e.target) && cont.has(e.target).length === 0) {
			$('.navbar__links').removeClass('active');
		}
	});

	$("#grupal").click(function () {
		$("#radio-grupal").prop('checked', true);
		$("#grupal").addClass('active');
		$("#negocios").removeClass('active');
		$("#pronto").removeClass('active');
	});

	$("#negocios").click(function () {
		$("#radio-negocios").prop('checked', true);
		$("#grupal").removeClass('active');
		$("#negocios").addClass('active');
		$("#pronto").removeClass('active');
	});

	$("#pronto").click(function () {
		$("#radio-pronto").prop('checked', true);
		$("#grupal").removeClass('active');
		$("#negocios").removeClass('active');
		$("#pronto").addClass('active');
	});

});	