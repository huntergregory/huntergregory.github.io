$(window).on('load', function() {
    var i = 0;
	var txt = "Hey! I'm Hunter.";
	var speed = 120;
	var pause = 350;
	var standardUnit = 25;
	var minNavHeight = 3 * standardUnit;

	if (getContentDistFromTop() < minNavHeight) { //min logo height
		revealNav();
		addNavShadow();
		setText();
	}
	else {
		turnOnBlinker();
		resetText();
		setTimeout(typeWriter, 3*pause);
	}
	
	function setText() {
		$('#name').text(txt);
	}

	function turnOnBlinker() {
		$("#cursor").removeClass('hidden');
	}

	function resetText() {
		$("#name").text("");
        i = 0;
	}
			
	function typeWriter() {
        if (i < txt.length) {
            var oldText = $("#name").text();
            var newContent = (typeof oldText != 'undefined') ? oldText + txt.charAt(i) : txt.charAt(i);
            console.log(oldText);
            i++;
            $('#name').text(newContent);
			if (i==4 || i == 15) { //at "Hey!"
				setTimeout(typeWriter, pause);
			}
			else {
				setTimeout(typeWriter, speed);
			}
		}
		console.log("typin!");
		if (i == txt.length) {
			revealNav();
		}
	}
});
    