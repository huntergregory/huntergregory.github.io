// a lot of hard coding for these numbers...
//See after-load.js for hard coded 527 too
$(document).scroll(function(){
    var nav = $('nav')
    var content = $('div.content')
    var minNavHeight = 3 * fontSize;
    var maxNavHeight = 5 * fontSize;
    var animationSpeed = 1; // should this take longer?

    function animateToHeight(ht) {
        nav.stop().animate({ height: ht}, animationSpeed);
    }

    function updateWhenSeparated() {
        content.css({'-webkit-box-shadow' : '0px -5px 4px rgba(0, 0, 0, 0.2)', 
                        '-moz-box-shadow' : '0px -5px 4px rgba(0, 0, 0, 0.2)', 
                        '-ms-box-shadow' : '0px -5px 4px rgba(0, 0, 0, 0.2)',
                        '-o-box-shadow' : '0px -5px 4px rgba(0, 0, 0, 0.2)',
                        'box-shadow' : '0px -5px 4px rgba(0, 0, 0, 0.2)'});
        nav.css({'-webkit-box-shadow' : 'none', 
                        '-moz-box-shadow' : 'none',
                        '-ms-box-shadow' : 'none',
                        '-o-box-shadow' : 'none',
                        'box-shadow' : 'none'});
    }

    function updateNav() {
        var distance = getContentDistFromTop();
        console.log(distance + " and " + minNavHeight);
        if (distance > maxNavHeight) {
            updateWhenSeparated();
            animateToHeight(maxNavHeight);
        } 
        else {
            if (distance > minNavHeight) {
                revealNav(); //global
                console.log("here");
                animateToHeight(distance);
            }
            else {
                animateToHeight(minNavHeight);
            }
            addNavShadow(); //also global
        }
    };

    updateNav();
}); 