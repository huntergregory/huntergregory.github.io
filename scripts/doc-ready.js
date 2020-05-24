var fontSize; //used among many scripts, ought to be global

$(document).ready(function() {
	handleResize();
	$(window).resize(function() { handleResize();});

	var allExperiences = [];
	var allSnapshots = [];

	const TITLE = "title";
	const TECHNOLOGIES = "technologies";
	const DATE = "date";
	const BULLETS = "bullets";
	const FILE = "file";
	const ALT = "alt";
	const IMG_EXTRA_CLASS = "extra class";

	var experience = {};
	experience[TITLE] = "Microsoft Software Engineer Internship";
	experience[FILE] = "microsoft/logo.png" //"microsoft/smallest_grey3.png" // "microsoft/smaller_grey.png";
	experience[ALT] = "Microsoft Logo";
	experience[TECHNOLOGIES] = "Kubernetes, GoLang, C#";
	experience[DATE] = "May 2020 - August 2020";
	experience[BULLETS] = [
		"Azure Container Networking Team" //, "", ...
	];
	allExperiences.push(experience);
	allSnapshots.push(experience);

	//TODO INCLUDE
	// Twitter Digest
	// Twitter Sarcasm Detection
	// Democratic Debates Transcripts
	// Datathon Thing
	// Unemployment Thing
	// Vergil Vocab?
	// anything else from the fall?

	var experience = {};
	experience[TITLE] = "Perthera Software Engineer Internship";
	experience[FILE] = "perthera.png";
	experience[ALT] = "Perthera Logo";
	experience[TECHNOLOGIES] = "RESTful Web Services, AWS S3, Java, MySQL, Vaadin";
	experience[DATE] = "May 2019 - August 2019";
	experience[BULLETS] = [
		"Worked with and created RESTful APIs, ORM's, MySQL tables, and frontend components across several projects.",
		"Expedited patient cancer treatment process and eased burden on patient coordinators by creating an automated system for faxing order forms to consenting patients' doctors (pre-filled forms with patient data). Up to 60 order forms sent weekly.",
		"Created a means to easily record and view all company interactions with doctors (full stack).",
		"Reduced the code base by ~2000 lines of code and eliminated several bugs by refactoring/constructing a table filtering system across multiple portals."
	];
	allExperiences.push(experience);
	allSnapshots.push(experience);

	experience = {};
	experience[TITLE] = "Dynamic Website & Reimbursement System";
	experience[FILE] = "dukemusictutors.mov";
	//experience[ALT] = "DMT Logo";
	//experience[IMG_EXTRA_CLASS] = "smaller";
	experience[TECHNOLOGIES] = "CakePHP, MySQL, HTML, CSS, JavaScript, AdobeXD";
	experience[DATE] = "July 2019 - Present";
	experience[BULLETS] = [
		"Created a website with a secure financial system and social forum (blogs, images, events, etc.) for my club.",
		"Implemented an MVC design with user authentication and standard security measures.",
		"Designed a database with ~20 normalized tables."
	];
	allExperiences.push(experience);
	allSnapshots.push(experience);

	experience = {};
	experience[TITLE] = "Core CS 230 Teaching Assistant";
	experience[DATE] = "August 2019 - Present";
	experience[BULLETS] = [
		"Plan weekly discussion sections, hold office hours, grade assignments.",
		"Topics including functional programming, recursion, map-reduce, uncomputability, (un)countable infinities, and others."
	];
	allExperiences.push(experience);

	experience = {};
	experience[TITLE] = "CS 308: Advanced Software Engineering";
	experience[TECHNOLOGIES] = "Git, XML, Java";
	experience[DATE] = "January 2019 - May 2019";
	experience[BULLETS] = [
		"Created four medium to large software systems in teams of 3-10 people.",
		"Strengthened skills with object-oriented design, polymorphism, design patterns, good code practices (creating extendible, reusable, & readable code).",
		"New criteria created throughout each project to mimic change in demands encountered in industry."
	];
	allExperiences.push(experience);

	experience = {};
	experience[TITLE] = "SmartBills & MelodySeeds iOS apps";
	experience[TECHNOLOGIES] = "Swift";
	experience[DATE] = "August 2018 - December 2018";
	experience[BULLETS] = [
		"Created a utility app and today extension (widget).",
		"Designed comprehensive wireframe for a music recording app."
	];
	allExperiences.push(experience);

	var snapshot = {};
	snapshot[TITLE] = "Game Engine & Heads Up Display";
	snapshot[FILE] = "vooga.gif";
	allSnapshots.push(snapshot);
	
	snapshot = {};
	snapshot[TITLE] = "Slogo Turtles";
	snapshot[FILE] = "slogo-recording.mov"
	allSnapshots.push(snapshot);

	snapshot = {};
	snapshot[TITLE] = "General Automata";
	snapshot[FILE] = "game-of-life-recording.mov"
	allSnapshots.push(snapshot);

	snapshot = {};
	snapshot[TITLE] = "Block Breacker";
	snapshot[FILE] = "BlockBreaker.png"
	snapshot[ALT] = "Block Breaker Project";
	allSnapshots.push(snapshot);

	snapshot = {};
	snapshot[TITLE] = "Smart Bills";
	snapshot[FILE] = "Smart-Bills-Assortment-wood-extension.png"
	snapshot[ALT] = "Smart Bills Project";
	allSnapshots.push(snapshot);

	snapshot = {};
	snapshot[TITLE] = "Melody Seeds";
	snapshot[FILE] = "Storyboards.png"
	snapshot[ALT] = "Melody Seeds Project";
	allSnapshots.push(snapshot);

	snapshot = {};
	snapshot[TITLE] = "This Website!";
	snapshot[FILE] = "logo-white.png"
	snapshot[ALT] = "Website Project";
	allSnapshots.push(snapshot);

	addExperiences(allExperiences);
	addSnapshots(allSnapshots);


	$(".mini-video").each(function() { this.play();});
	writeName()

	function addExperiences(experiences) {
		var experienceDiv = $('#experiences');
		for (k=0, len=experiences.length; k<len; k++) {
			experience = experiences[k];
			var newDiv = 
			"<div class='exp-bullet'>" + 
				"<h4>" + experience[TITLE] + "</h4>";
			if (TECHNOLOGIES in experience) {
				newDiv += 
				"<h5>Technologies: " + experience[TECHNOLOGIES] + "</h5>";
			}

			var bullets = "";
			const bulletsLen = experience[BULLETS].length;
			const  snapshotsAnchor = '<a name="snapshots-anchor"></a>';
			for (j=0; j<bulletsLen; j++) {
				if (k == len - 1 && j == bulletsLen - 2) {
					bullets += snapshotsAnchor;
				}
				bullets += "<li>" + experience[BULLETS][j] + "</li>";
			}
			if (k == len - 1 && bulletsLen < 2) {
				newDiv += snapshotsAnchor;
			}
			newDiv += 
				"<h6>" + experience[DATE] + "</h6>" +
				"<ul>" + 
					bullets
				"</ul>" +
			"</div>";
			experienceDiv.append(newDiv);
		}
	}

	function addSnapshots(snapshots) {
		var snapshotDiv = $('#snapshots');
		for (k=0, len=snapshots.length; k<len; k++) {
			var snapshot = snapshots[k];
			var divClasses = "card-buffer col-xs-10 col-xs-offset-1 ";
			if (k == len - 1 && len % 2 == 1) {
				divClasses += "col-md-offset-1 col-md-10";
			}
			else {
				divClasses += "col-md-offset-0 col-md-6";
			}

			const TITLE = "title";
			const TECHNOLOGIES = "technologies";
			const DATE = "date";
			const BULLETS = "bullets";
			const FILE = "file";
			const ALT = "alt";

			var file = snapshot[FILE];
			var isVid = file.includes('.mov');
			var picOrVid;
			if (isVid) {
				picOrVid = "<video class='mini-video center-block' autoplay muted loop>" +
								"<source src='videos/" + file + "'>"
							"</video>";
			}
			else {
				var classes = "center-block";
				if (IMG_EXTRA_CLASS in snapshot) {
					classes += " " + snapshot[IMG_EXTRA_CLASS];
				}
				picOrVid = "<img src='images/" + file + "' alt='" + snapshot[ALT] + "' class='" + classes + "'>";
			}

			var newDiv = 
			"<div class='" + divClasses + "'>" + 
				"<div class='card center-block'>" +
					"<div class='text-center text-buffer'>" +
						"<p class='title'>" + snapshot[TITLE] + "</p>" +
					"</div>" + 
					"<div class='pic-wrapper center-block'>" + 
						picOrVid +
					"</div>" + 
				"</div>" +
			"</div>";

			snapshotDiv.append(newDiv);
		}
	}




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
			navButtons.show();
		}
		else {
			(navButtons).hide();
		}
	}
});