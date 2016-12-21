(function () {

  'use strict'

  var gonzo, optimo, renegade

  global.$ = require('jquery')

  function randomInterval (min, max) {
  	console.log('randomInterval called')
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  function scrollToElement (col, el, ms) {
    console.log('scrollToElement called. Going to: ' + $(el).offset().top)

    // $(el).addClass('debug')

    var speed = (ms) ? ms : 600

    $(col).animate({
      scrollTop: $(el).position().top
    }, speed, 'swing', winner() )
  
  }

  function resetScroll(col, el, ms){	
    console.log('resetScroll called')

    var speed = (ms) ? ms : 600

    $(col).animate({
      scrollTop: $(el).scrollTop()
    }, speed, 'swing' )
  }

  function checkResult(result1, result2, result3) {
  		console.log('check result called')
	    // left
	    if (result1 % 3 === 0) {
	      console.log('left: r')
	    }
	    if ((result1 + 1) % 3 === 0) {
	      console.log('left: o')
	    }
	    if ((result1 + 2) % 3 === 0) {
	      console.log('left: g')
	    }

	    // mid
	    if ((result2) % 3 === 0) {
	      console.log('mid: p')
	    }
	    if ((result2 + 1) % 3 === 0) {
	      console.log('mid: o')
	    }
	    if ((result2 + 2) % 3 === 0) {
	      console.log('mid: e')
	    }

	    // right
	    if ((result3) % 3 === 0) {
	      console.log('right: n')
	    }
	    if ((result3 + 1) % 3 === 0) {
	      console.log('right: n')
	    }
	    if ((result3 + 2) % 3 === 0) {
	      console.log('right: t')
	    }

  		// if REN
	    if (result1 % 3 === 0 && (result2 + 2) % 3 === 0 && (((result3 + 1) % 3 === 0) || ((result3) % 3 === 0))) {
	      return renegade = 1
	    }

	    // if OPT
	    if ((result1 + 1) % 3 === 0 && (result2) % 3 === 0 && (result3 + 2) % 3 === 0) {
	      return optimo = 1
	    }

	    // if GON
	    if ((result1 + 2) % 3 === 0 && (result2 + 1) % 3 === 0 && (((result3 + 1) % 3 === 0) || ((result3) % 3 === 0))) {
	      return gonzo = 1
	    }
  }

  function winner() {
  	  console.log('winner called...')

  	  $('#gonzo #renegade #optimo').removeClass();

      if (gonzo === 1) {
		$('#gonzo img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nVMlNEc_nu-BlGaZe-MUT02Ry6zjEr2MN7_gces0eS_gtCVg_ynYPhw').addClass('winner')
		$('#gonzo .description').show()
		console.log('gonzo')
      }
      if (optimo === 1) {
		$('#optimo img').attr('src', 'https://pbs.twimg.com/profile_images/494501654926864384/w7zi0zhc.jpeg').addClass('winner')
		$('#optimo .description').show()
		console.log('optimo')
      }
      if (renegade === 1) {
		$('#renegade img').attr('src', 'http://downloadablesuicide.com/wp-content/uploads/2010/02/renegade-sarah-shepard.jpg').addClass('winner')
		$('#renegade .description').show()
		console.log('renegade')
      }
  }

  function spin (min, max) {

  	console.log('spin called');

	  	setTimeout(function(){
	  		resetScroll('.l, .m, .r', 'h1:nth-child(1)', 400)
	  	}, 10000)

	    var result1 = randomInterval(min, max),
        	result2 = randomInterval(min, max),
        	result3 = randomInterval(min, max)

        // var result1 = 1,
        // 	result2 = 1,
        // 	result3 = 1 

	    checkResult(result1, result2, result3)

	    scrollToElement('.l', '.l h1:nth-child(' + (result1 + 1) + ')', randomInterval(2000, 4000))
	    scrollToElement('.m', '.m h1:nth-child(' + (result2 + 1) + ')', randomInterval(3000, 6000))
	    scrollToElement('.r', '.r h1:nth-child(' + (result3 + 1) + ')', randomInterval(5000, 8000))

  }

  function notify() {

  	var clicked = $(event.currentTarget).attr('class');

  	console.log('clicked')

  	$('.slot-machine-wrapper').show()

  	if(clicked === 'people') {
      	$('.tooltip').removeClass().addClass('tooltip people')
  	} else if( clicked === 'quotes' ) {
      	$('.tooltip').removeClass().addClass('tooltip quotes')
  	} else if (clicked === 'world' ) {
      	$('.tooltip').removeClass().addClass('tooltip world')
  	} 
    

  }

  function printStyles() {

    var currentClass

    $('p').not('li > p').not('.fig').not('.caption').each(function( index ){
      if ( $(this).attr('class') === 'gon' || $(this).attr('class') === 'opt' || $(this).attr('class') === 'ren' ) {
        currentClass = $(this).attr('class')  
      } else {
        $(this).addClass(currentClass + ' ' + 'no-indent')
      }
    }, webcam());
  }

  function webcam() {

    var webcam = document.getElementById('webcam')

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            webcam.src = window.URL.createObjectURL(stream)
            webcam.play()
        });
    }

    $.get("http://ipinfo.io", function(response) {
      var address = response.ip
      $('#ip-address').append(address)
    }, "jsonp")

    $('#datetime').append(Date())
  }

  // A self playing slot machine that unlocks the characters of the play.
  // Could go as far as only showing the text that is unlocked.

  $(function () {

	    $('#all').load('html/print.html', printStyles)

	    setInterval(function () {
  			spin(1, 42)
    	}, 13000)

      spin(1, 42)

	    $('.people, .quotes, .world').on('mousedown', notify)

      $('#print').on('click', print)

  })

}())
