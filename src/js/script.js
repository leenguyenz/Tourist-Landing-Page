$('.nav-fixed').on("click", function(){
    $(this).toggleClass('bar-transform');
    $('nav').toggleClass('nav-block');
})

$('.btn').mouseover(function(){
    $(this).addClass('btn-effect').animate({
        scale: 1.5,
        opacity: 1
    },500)
});
$('.btn').mouseout(function(){
    $(this).removeClass('btn-effect');
});
