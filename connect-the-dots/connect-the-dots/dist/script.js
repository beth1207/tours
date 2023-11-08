$('#start').click(function() {
  $('.progress-bar').animate({
    width: "+=200px"
  });
});

$('#reset').click(function() {
  $('.progress-bar').css('width','0')
});