(function () {

  'use strict'

  var gonzo, optimo, renegade
  var result1, result2, result3
  var spinning = 0

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
    }, speed, 'swing')
  
  }

  function resetScroll(col, el, ms){	
    console.log('resetScroll called')

    checkResult(winner)

    var speed = (ms) ? ms : 600

    $(col).animate({
      scrollTop: $(el).scrollTop()
    }, speed, 'swing', function(){
      $('#spin').addClass('spin')
      spinning = 0
    })
  }

  function checkResult(callback) {
  		console.log('check result called', result1, result2, result3)
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
	      renegade = 1
	    }

	    // if OPT
	    if ((result1 + 1) % 3 === 0 && (result2) % 3 === 0 && (result3 + 2) % 3 === 0) {
	      optimo = 1
	    }

	    // if GON
	    if ((result1 + 2) % 3 === 0 && (result2 + 1) % 3 === 0 && (((result3 + 1) % 3 === 0) || ((result3) % 3 === 0))) {
	      gonzo = 1
	    }

      winner()
  }

  function winner() {
  	  console.log('winner called...')

  	  $('#gonzo #renegade #optimo').removeClass();

      if (gonzo === 1) {
    		$('#gonzo img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nVMlNEc_nu-BlGaZe-MUT02Ry6zjEr2MN7_gces0eS_gtCVg_ynYPhw').addClass('winner')
    		$('#gonzo .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
		console.log('gonzo')
      }
      if (optimo === 1) {
    		$('#optimo img').attr('src', 'https://pbs.twimg.com/profile_images/494501654926864384/w7zi0zhc.jpeg').addClass('winner')
    		$('#optimo .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
		console.log('optimo')
      }
      if (renegade === 1) {
    		$('#renegade img').attr('src', 'http://downloadablesuicide.com/wp-content/uploads/2010/02/renegade-sarah-shepard.jpg').addClass('winner')
    		$('#renegade .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
		console.log('renegade')
      }
  }

  function spin (min, max) {

  	console.log('spin called');

	  	setTimeout(function(){
	  		resetScroll('.l, .m, .r', 'h1:nth-child(1)', 400)
	  	}, 10000)

      result1 = randomInterval(min, max),
      result2 = randomInterval(min, max),
      result3 = randomInterval(min, max)

	    scrollToElement('.l', '.l h1:nth-child(' + (result1 + 1) + ')', randomInterval(2000, 4000))
	    scrollToElement('.m', '.m h1:nth-child(' + (result2 + 1) + ')', randomInterval(3000, 6000))
	    scrollToElement('.r', '.r h1:nth-child(' + (result3 + 1) + ')', randomInterval(5000, 8000))

  }

  function showNotifications() {

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

    $('p').not('li > p').not('.fig').not('.caption').not('.pagenumbers > p').not('#spin > p').not('#datetime, #ip-address, #author').each(function( index ){
      if ( $(this).attr('class') === 'gon' || $(this).attr('class') === 'opt' || $(this).attr('class') === 'ren' ) {
        currentClass = $(this).attr('class')  
      } else {
        $(this).addClass(currentClass + ' ' + 'no-indent')
      }
    }, webcam());

  }

  function webcam() {

    var webcam = document.getElementById('webcam')
    var constraints = { 
            audio: false, 
            video: { 
                width: { max: 1.5 }, 
                height: { max: 1 },
                frameRate: { ideal: 10, max: 15 },
                facingMode: "user" 
            } 
          }

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            webcam.src = window.URL.createObjectURL(stream)
            webcam.play()
        });
    }

  }

  function userInfo() {

    var newDate = Date()
    console.log($('#datetime'))
    $('#datetime').append('sss')

    $.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2))
        var address = data.ip
        var country = data.country_code
        var user = getCookie("firstname")
        $('#ip-address').append(user + ', ' + country + ': ' + address)
    })
  }

  //
  // COOKIES
  //

  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
      var name = cname + "="
      var ca = document.cookie.split(';')
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i]
          while (c.charAt(0) == ' ') {
              c = c.substring(1)
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length)
          }
      }
      return ""
  }

  function checkCookie() {
      var user = getCookie("firstname")
      if (user != "") {
          
      } else {
          user = prompt("Please enter your first and last name:", "");
          if (user != "" && user != null) {
              setCookie("firstname", user, 365)
          }
      }
  }


  // A self playing slot machine that unlocks the characters of the play.
  // Could go as far as only showing the text that is unlocked.

  $(function () {

      checkCookie()

      userInfo()

      console.log(document.getElementById('test'))

	    $('#all').load('html/print.html', printStyles)

	    $('.people, .quotes, .world').on('mousedown', showNotifications)

      $('#print').on('click', print)

      $('#spin').on('click', function(){
        if(spinning === 0){
          $(this).removeClass()
          spinning = 1
          spin(1, 42)
        } else {
          console.log('wait...')
        }          
      })        

  })

}())
