// NAVBAR SCROLL
    $(window).scroll(function() {
     if ($("#menu").offset().top > 300) {        
         $("#menu").removeClass("bg-transparent");
        $("#menu").addClass("navbar-opacity");
       } else {        
        $("#menu").addClass("bg-transparent");
        $("#menu").removeClass("navbar-opacity");
       }
});

// FIN NAVBAR SCROLL

// SMOOTH SCROLL
    
    $(function() {
       
        $("a").click(function(event){
         if (this.hash !=="") {
             event.preventDefault();

        var gato = this.hash;

        $("html, body").animate ({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          
          });
         }
        });
    
    });

