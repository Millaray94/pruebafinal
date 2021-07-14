$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $("#menu").addClass("bg-dark");
       } else {
        $("#menu").removeClass("bg-dark");
       }
    });
});