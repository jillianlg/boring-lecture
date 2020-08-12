$(document).ready(function() {
  $("#change-mode").click(function() {
    $("body").toggleClass("dark-mode");
  });
  
  $("#highlight-hide").click(function() {
    $(this).toggleClass("highlight-show");
  });

  $("p").click(function() {
    $(this).toggleClass("paragraph-border");
    $("p").not(this).removeClass("paragraph-border");
  });
});