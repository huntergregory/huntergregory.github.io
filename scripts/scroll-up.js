/* not working */
var navHeight = 3 * fontSize;
function scrollUpAfterHyperlink() {
    setTimeout(function () { $(window).scrollTop($(window).scrollTop() - navHeight); }, 20);
}