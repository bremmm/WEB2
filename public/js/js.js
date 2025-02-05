
debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function () {

    var $target = $('.anime')
    animationClass = 'anime-start';
    offset = $(window).height() * 2/3;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));

}());

(function () {

    var $target = $('.anime2')
    animationClass = 'anime-start';
    offset = $(window).height() * 3/4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));

}());

(function () {

    var $target = $('.anime3')
    animationClass = 'anime-start';
    offset = $(window).height() * 3/4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));

}());

(function () {

    var $target = $('.anime4')
    animationClass = 'anime-start';
    offset = $(window).height() * 3/4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));

}());


$(function(){

    $("div.i").css("display", "none");
    $("div#i1").addClass("active");

    $("a#menuI").on("click", function( e ){         
      e.preventDefault();
        
    	$("div").removeClass("active");
        var id = $(this).attr("href"); 
        $("#"+id+"").addClass("active");
        
    });
});

$(function(){

    $("div.b1").css("display", "none");
    $("div#f1").addClass("active");

    $("a#menuM").on("click", function( e ){         
      e.preventDefault();
        
    	$("div").removeClass("active");
        var id = $(this).attr("href"); 
        $("#"+id+"").addClass("active");
        
    });
});