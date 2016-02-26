// $("h1").click(function(){
//   $("h1").slideUp(100);
//   $(".click").animate({opacity:0.5,
//                        marginLeft:480,
//                       'marginTop':'+=30',});
//   $(".click2").animate({opacity:0.5,
//                        marginLeft:480,
//                       'marginTop':'-=316',},2000); 
//   $(".hide").fadeOut(4000);                                        
// })

// $(".click2").hover(function(){
//    $(".hide").show(200)
// })


  $(document).click(function() {
    $("h1").slideUp(100);
  $(".click").animate({opacity:0.5,
                       marginLeft:480,
                      'marginTop':'+=30',});
  $(".click2").animate({opacity:0.5,
                       marginLeft:480,
                      'marginTop':'-=316',},2000); 
  $(".hide").fadeOut(4000);                                        
})

$(".click2").hover(function(){
   $(".hide").show(200)
});