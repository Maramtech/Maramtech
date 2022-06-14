$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header div').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header div').removeClass('visible-title');
    }
});
