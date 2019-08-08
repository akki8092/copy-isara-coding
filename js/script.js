// こちらは模写コーディングのコードです。  本家のサイトはこちらをご参照ください。  「iSara[イサラ] | バンコクのノマドエンジニア育成講座」https://isara.life/

$(function(){
  'use strict';
  $('a[href^="#contact"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $('#back_to_top').hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('#back_to_top').fadeIn();
    } else {
      $('#back_to_top').fadeOut();
    }
  });
  $('#back_to_top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
