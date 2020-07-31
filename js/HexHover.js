$(document).ready(function(){

  $("#hex1").mouseover(function(){
       console.log("bootstrap");
        $("#bs").css("color", "#862121");
        //$("#bs").css("text-shadow", "black 2px 2px");
        $(this).mouseout(function(){
              $("#bs").css("color", "black");
        });
  });
  $("#hex2").mouseover(function(){
       console.log("css");
        $("#cs").css("color", "#862121");
        //$("#bs").css("text-shadow", "black 2px 2px");
        $(this).mouseout(function(){
              $("#cs").css("color", "black");
        });
  });

  $("#hex5").mouseover(function(){
       console.log("html");
       $("#html").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#html").css("color", "black");
       });
  });
  $("#hex6").mouseover(function(){
       console.log("js");
       $("#js").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#js").css("color", "black");
       });
  });
  $("#hex7").mouseover(function(){
       console.log("jq");
       $("#jq").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#jq").css("color", "black");
       });
  });

  $("#hex11").mouseover(function(){
       console.log("node");
       $("#node").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#node").css("color", "black");
       });
  });
  $("#hex12").mouseover(function(){
       console.log("mongodb");
       $("#db").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#db").css("color", "black");
       });
  });

  $("#hex15").mouseover(function(){
       console.log("mysql");
       $("#sql").css("color", "#862121");
       //$("#bs").css("text-shadow", "black 2px 2px");
       $(this).mouseout(function(){
             $("#sql").css("color", "black");
       });
  });



});
