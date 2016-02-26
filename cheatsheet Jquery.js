
$(document).ready(function(){
  // To show or hide an element on 
  // the page with jQuery, select it 
  // and call the show() or hide() 
  // function on your selection
  $(".target").hide();
  $(".target").show();




  // To show or hide an element on the
  // page using a fading animation, select 
  // it and call the fadeIn() or fadeOut()
  // function on your selection
  $("#section-one").fadeOut();
  $("#section-one").fadeIn();



  // Another way of hiding and showing items
  // on the page is by using the slideUp() or
  // slideDown() methods
  
  $("#section-one").slideUp(1000); 
  $("#section-one").slideDown(4000); 






} );



