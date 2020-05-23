$(document).ready(function() {

  $(".hex").hover(function(){
    console.log("hovererd");
        $("h3:first").replaceWith("JavaScript!");
    $(".info").animate({width: "300px"});
    $(".infotext").animate({left: "300px"});
    }, function(){

    $(".info").animate({width: "50px"});
    $(".infotext").animate({left: "-0px"});

  });



});
