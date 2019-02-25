function revealNav() {
    $('#outer-logo-wrapper').addClass('fading');
    $('#inner-logo-wrapper').addClass('spinning');
    $('#logo').addClass('scaling');
    $('div.inline-grid').addClass('fading');
}

function addNavShadow() {
    $('div.content').css({'-webkit-box-shadow' : 'none', 
        '-moz-box-shadow' : 'none', 
        '-ms-box-shadow' : 'none',
         '-o-box-shadow' : 'none',
        'box-shadow' : 'none'});
    $('nav').css({'-webkit-box-shadow' : '0 3px 3px -2px #000000', 
        '-moz-box-shadow' : '0 3px 3px -2px #000000',
        '-ms-box-shadow' : '0 3px 3px -2px #000000',
        '-o-box-shadow' : '0 3px 3px -2px #000000',
         'box-shadow' : '0 3px 3px -2px #000000'});
}