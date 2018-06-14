$('.nav-fixed').on("click", function(){
    $(this).toggleClass('bar-transform');
    $('nav').toggleClass('nav-block');
})

$('.btn').mouseover(function(){
    $('.btn:after').animate({
        transform: scale(1.5),
        opacity:1
    },500)
})
