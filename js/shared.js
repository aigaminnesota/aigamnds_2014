var shared = {};

shared.init = function(){
    shared.addListeners();
}

shared.addListeners = function(){
    shared.addSmoothScrolling();
    // image lazy loading
    $("img").unveil();
    // add scrolling item
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
}


shared.addSmoothScrolling = function(){
    $("ul.nav a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
            }, 500, function(){
              // when done, add hash to url
              // (default click behaviour)
              window.location.hash = hash;
            }
        );

    });
}

$(document).ready(function() {
    shared.init();
});