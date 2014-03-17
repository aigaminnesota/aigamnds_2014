var shared = {};

shared.init = function(){
    shared.addListeners();
}

shared.addListeners = function(){
    shared.addBtsSmoothScrolling();
}


shared.addBtsSmoothScrolling = function(){
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

shared.init();