
$(document).ready(function() {
	userGuide();
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{'left': '1020px'},
  		500,
  		function() {
  			$('.hadouken').hide();
  			$('.hadouken').css('left', '609px');
  		});

  	})
  .mouseup(function() {
  	//ryu goes back to his ready position
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
  $(document).keydown(function(e){
  	if (e.keyCode == 88) {
  		$('.ryu-ready').hide();
  		$('.ryu-kool').show();
  	}	
  });
});


function playHadouken() {
		$('#hadouken-sound')[0].volume=0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

function userGuide() {
	$('.fighter').fadeIn(900);
	$('.warmup').fadeIn(10000);
	$('.weapon').fadeIn(20000);
	$('.pose').fadeIn(25000);
}