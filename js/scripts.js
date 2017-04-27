$(document).ready(function() {
      $("form").submit(function(event) {
        var a = parseInt($("input#sidea").val());
        var b = parseInt($("input#sideb").val());
        var c = parseInt($("input#sidec").val());
        var results="";
      if(c> a+b || b>a+c || a>b+c){
        results = "Not a Triangle";
      }else {
        if(a===b && a===c){
          results = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          results = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             results = "Scalene";
          }
        }
      }
      }
        $(".output").text(results);
        event.preventDefault();
      });
    });
