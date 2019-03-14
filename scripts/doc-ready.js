var fontSize; //used among many scripts, ought to be global

$(document).ready(function() {
	handleResize();

	$(window).resize(function() { handleResize();});
	
	$(".mini-video").each(function() { this.play();});

	function handleResize() {
		var windowSize = $(window).width();
		setFontSize(windowSize);
		handleNav(windowSize);
	}

	function setFontSize(screenWidth) {
		console.log("window size is " + screenWidth);
		if (screenWidth > 1500) {
			fontSize = 28;
		}
		else if (screenWidth > 850) {
			fontSize = 25;
			console.log("here");
		}
		else if (screenWidth > 650) {
			fontSize = 20;
		}
		else if (screenWidth > 570) {
			fontSize = 18;
		}
		else if (screenWidth > 450) {
			fontSize = 15;
		}
		else if (screenWidth > 350) {
			fontSize = 12;
		}
		else {
			fontSize = 10;
		}
		$('body').css('font-size', fontSize);
	};

	function handleNav(screenWidth) {
		var navButtons = $('div.inline-grid');
		if (screenWidth > 620) {
			navButtons.show(); console.log("showing");
		}
		else {
			(navButtons).hide(); console.log("hiding");
		}
	}
});