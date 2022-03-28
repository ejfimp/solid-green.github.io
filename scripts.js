var i = true;
$(document).ready(function () {
    $("#latest-programming-button").click(function () {        
        if (i) {
            $("#latest-webdev-button").fadeOut("slow");
            $("#paragraph-container").slideUp("slow", function () {
                $("#latest-programming").slideDown("slow");
            })
            i=false;
        }
        else if (!i){
            
            $("#latest-programming").slideUp("slow", function(){
                $("#latest-webdev-button").fadeIn("slow");
                $("#paragraph-container").slideDown("slow");
            })
            i=true;
        }
    })
    $("#latest-webdev-button").click(function () {        
        if (i) {
            $("#latest-programming-button").fadeOut("slow", function(){
                $("#latest-programming").animate("slow", {left: '0px'})
            });
            $("#paragraph-container").slideUp("slow", function () {
                $("#latest-webdev").slideDown("slow");
            })
            i=false;
        }
        else if (!i){
            
            $("#latest-webdev").slideUp("slow", function(){
                $("#latest-programming-button").fadeIn("slow");
                $("#paragraph-container").slideDown("slow");
            })
            i=true;
        }
    })
})