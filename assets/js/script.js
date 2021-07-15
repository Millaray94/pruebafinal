// NAVBAR SCROLL
    $(window).scroll(function() {
     if ($("#menu").offset().top > 500) {        
         $("#menu").removeClass("bg-transparent");
        $("#menu").addClass("navbar-opacity");
       } else {        
        $("#menu").addClass("bg-transparent");
        $("#menu").removeClass("navbar-opacity");
       }
});

// FIN NAVBAR SCROLL