$(document).ready(function() {

	itemHover(".courses .items #a1");
	itemHover(".courses .items #a2");
	itemHover(".courses .items #a3");
	itemHover(".courses .items #a4");
	itemHover(".courses .items #a5");
	itemHover(".courses .items #a6");
	itemHover(".courses .items #a7");
	itemHover(".courses .items #a8");
	resizeCourse();
	loginSignup();

	$(window).load(function() {
		$("#open").fadeOut(1000);
	});

	function itemHover(class1){

		$(class1).hover(function() {
			$(class1 + " .flipper-front").css('transform', 'rotateY(180deg)');
			$(class1 + " .flipper-front").css('-webkit-transform', 'rotateY(180deg)');
			$(class1 + " .flipper-front").css('opacity', '0');

		}, function() {
			$(class1 + " .flipper-front").css('transform', 'rotateY(0)');
			$(class1 + " .flipper-front").css('-webkit-transform', 'rotateY(0)');
			$(class1 + " .flipper-front").css('opacity', '1');
		});


		$(class1).hover(function() {
			$(class1 + " .flipper-back").css('opacity', '1');
		}, function() {
			$(class1 + " .flipper-back").css('opacity', '0');
		});
	}

	function resizeCourse(){
		var windowWidth = null;
		$(window).resize(function(event) {
			windowWidth = $(window).width();

			if (windowWidth > 800) {
				$(".courses .items").animate({width: 800}, 100);
			}

			if(windowWidth < 800 && windowWidth > 600){
				$(".courses .items").animate({width: 600}, 100);

			} else if(windowWidth < 600 && windowWidth > 400){
				$(".courses .items").animate({width: 400}, 100);

			} else if(windowWidth < 400 && windowWidth > 200){
				$(".courses .items").animate({width: 200}, 100);
			}
		});
	}

	function loginSignup(){
		$("#register").click(function(event) {
			$(".navbar").css('width', '300px');
			$(".navbar-register").css('width', '300px');
		});

		$(".navbar-register button").click(function(event) {
			$(".navbar").css('width', '100px');
			$(".navbar-register").css('width', '0px');
		});


		$("#login").click(function(event) {
			$(".navbar").css('width', '300px');
			$(".navbar-login").css('width', '300px');
			//$(".login-area").css('width', '200px');  //delete this line and handle with PHP
		});

		$(".navbar-login button").click(function(event) {
			$(".navbar").css('width', '100px');
			$(".navbar-login").css('width', '0px');
		});
	}

	$(window).scroll(function(event) {
		viewPortChecker('#about', '#about #item1','animated fadeInLeft');
		viewPortChecker('#about', '#about #item2','animated fadeInDown');
		viewPortChecker('#about', '#about #item3','animated fadeInRight');
	});

	function viewPortChecker (elem, elem2, cls){
		var _POSITION = $(elem).offset();
		var elemPosition = _POSITION.top - 400;

		var scroll = $(window).scrollTop();

	    if (scroll > elemPosition) {
	      	$(elem2).addClass(cls);
	    }
	}


	/*-----------------------------------------------------------------------------------------------------*/
	var hashTagActive = "";

	$(".scroll").click(function (event) {

			event.preventDefault();
			//calculate destination place
			var dest = 0;
			if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
				dest = $(document).height() - $(window).height();
			} else {
				dest = $(this.hash).offset().top;
			}
			//go to destination
			$('html,body').animate({
				scrollTop: dest
			}, 1500, 'swing');
			hashTagActive = this.hash;
	});/*End Scroll Function*/
	/*-----------------------------------------------------------------------------------------------------*/


});
