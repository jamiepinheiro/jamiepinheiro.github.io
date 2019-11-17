$(function() {
  $(".scroll-down").click(function() {
      console.log("clicked");
      
    $("html, body").animate(
      { scrollTop: $("#projects").offset().top },
      1000
    );
    return false;
  });
});

var baseColor = [40, 127, 197];
var diff = [40, 101, 16];

$("#body").on( 'scroll', function(e) {
    var progress = Math.min(1, document.body.scrollTop/$("#bg").height());
    $("#bg").css("background-color", `rgb(${baseColor[0] + progress*diff[0]}, ${baseColor[1] + progress*diff[1]}, ${baseColor[2] + progress*diff[2]}`)
 });
