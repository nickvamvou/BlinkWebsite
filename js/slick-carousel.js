/**
 * Created by nikolasvamvou on 10/10/17.
 */
$(document).ready(function () {

    //alert("Hello");

    $('.headers-change').slick({
        arrows:false,
        infinite : true,
        dots: false,
        slidesToShow : 1,
        asNavFor : '.screen-slider'

    });
    $('.screen-slider').slick({
        infinite : true,
        arrows:true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='img/device-images/previous.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/device-images/next.png'>",
        fade : true,
        asNavFor : '.headers-change'

    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        //tracks phone

        $("#laphone").hide();
        $(".slick-slide img").css("height", "400px");
        $(".slick-slide").css("height", "400px");


       // $(".mb-4").css("heght", "400px !important");


       // $(".headers-change").hide();

       // $(".container.h-100").hide();





    }


});