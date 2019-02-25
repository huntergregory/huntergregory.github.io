function getContentDistFromTop() {
    var scrollTop = $(window).scrollTop();
    var contentOffset = $('div.content').offset().top;
    var distanceFromTop = (contentOffset - scrollTop);
    return distanceFromTop;
};