$(document).ready(function(){

     $("li:not(#trabajos)").click(function(){
         if($("li a#trabajos").hasClass("active")){
            $("li a#trabajos").removeClass("active");
         };

         if($("ul#item1").hasClass("collapse in")){
            $("ul#item1").collapse("hide");
            $("span#trabajos").removeClass("glyphicon-minus");
            $("span#trabajos").addClass("glyphicon-plus");
         };
     });

     $("li a#trabajos").click(function(){
            if($("span#trabajos").hasClass("glyphicon-plus")){
                $("span#trabajos").removeClass("glyphicon-plus");
                $("span#trabajos").addClass("glyphicon-minus");
                }
            else if($("span#trabajos").hasClass("glyphicon-minus")){
                $("span#trabajos").removeClass("glyphicon-minus");
                $("span#trabajos").addClass("glyphicon-plus");
            }
            $("li").removeClass("active");
            $("li a#trabajos").addClass("active");
        });

});


