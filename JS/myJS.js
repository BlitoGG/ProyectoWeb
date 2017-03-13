$(document).ready(function(){
    $("a#trabajos").click(function(){
        if($("span#trabajos").hasClass("glyphicon-plus")){
            $("span#trabajos").removeClass("glyphicon-plus");
            $("span#trabajos").addClass("glyphicon-minus");
            }
        else if($("span#trabajos").hasClass("glyphicon-minus")){
            $("span#trabajos").removeClass("glyphicon-minus");
            $("span#trabajos").addClass("glyphicon-plus");
        }
    });
});


