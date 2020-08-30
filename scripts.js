$(".burger").click(function(){
    $(".nav-mobile").toggleClass("hide");
    $("#body").toggleClass("stop-scrolling")
})

$(".nav-item").click(function(){
    $(".nav-mobile").toggleClass("hide");
    $("#body").toggleClass("stop-scrolling")
})

//fix problem s navigaci, kdyz je otevrena a probehne resize










$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
//todo spustit pouze jednou
var fireOnce = false;

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('.slider-wrap').isOnScreen() && !fireOnce ) {

            fireOnce = true;

            setTimeout(function() {
                $(".img1").attr("src", "images/slider/oneRed.png");
                $( ".text1" ).css("color", "#F02928");
            }, 500);
            setTimeout(function() {
                $(".img1").attr("src", "images/slider/one.png");
                $( ".text1" ).css("color", "#9EAFC4");
            }, 2000);

            setTimeout(function() {
                $(".img2").attr("src", "images/slider/twoRed.png");
                $( ".text2" ).css("color", "#F02928");
            }, 2000);
            setTimeout(function() {
                $(".img2").attr("src", "images/slider/two.png");
                $( ".text2" ).css("color", "#9EAFC4");
            }, 6000);

            setTimeout(function() {
                $(".img3").attr("src", "images/slider/threeRed.png");
                $( ".text3" ).css("color", "#F02928");
            }, 6000);
            setTimeout(function() {
                $(".img3").attr("src", "images/slider/three.png");
                $( ".text3" ).css("color", "#9EAFC4");
            }, 10000);

            setTimeout(function() {
                $(".img4").attr("src", "images/slider/fourRed.png");
                $( ".text4" ).css("color", "#F02928");
            }, 10000);
            setTimeout(function() {
                $(".img4").attr("src", "images/slider/four.png");
                $( ".text4" ).css("color", "#9EAFC4");
            }, 14000);

        } else {
        }
    });
});