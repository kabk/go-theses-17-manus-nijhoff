(function () {

  'use strict'

  var gonzo, optimo, renegade
  var result1, result2, result3
  var clicked
  var distractions = ['hey', 'hi', 'how are ya', 'what\'s up', 'hello', 'hey!', 'good morning', 'good afternoon', 'good day', 'hello sir', 'hello madam']

  global.spinning     = 0
  global.webcamSnaps  = []

  var Webcam =  require('./webcam.min.js')

  global.$ =    require('jquery')

                require('./spin.js')
                require('./cookies.js')
                require('./cam.js')

  window.jQuery = $

  // NOTIFICATIONS

  function isElementInViewport (el) {

      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }

      var rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= $(window).height() / 2 && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
  }

  function notifyUp(lastClass, thisId) {

    if( lastClass === 'people' || lastClass === 'quotes' || lastClass === 'world' || lastClass === 'valley' || lastClass === 'intro' || lastClass === 'time' ){
      $('.notifications.' + lastClass + '').show().html(function(i, val){
        return val * 1 + 1
      })

      // check for matching element
      var el = $('.notifications-wrapper .' +lastClass+' > li#' +thisId+ '')
      el.css('color', 'red')
      console.log(el.attr('id'));
      el.addClass('unlocked')
    }

  }

  function showNotifications() {

    // check current clicked element
    var current = $(this).attr('class')
  	console.log(clicked, current)

    if(current === clicked && $('.notifications-wrapper').is(':visible') ) {
      $('.notifications-wrapper, .tooltip').hide()
    } else {
      $('.notifications-wrapper, .tooltip').show()
    }

    clicked = current

    $('.content').hide()

  	if(current === 'people') {
      	$('.tooltip').removeClass().addClass('tooltip people')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()
        // $('.people > .content.unlocked').show()
  	} else if( current === 'quotes' ) {
      	$('.tooltip').removeClass().addClass('tooltip quotes')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()

  	} else if (current === 'world' ) {
      	$('.tooltip').removeClass().addClass('tooltip world')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()

  	} else if (current === 'valley') {
        $('.tooltip').removeClass().addClass('tooltip valley')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()

    } else if( current === 'intro' ) {
        $('.tooltip').removeClass().addClass('tooltip intro')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()

    } else if (current === 'time' ) {
        $('.tooltip').removeClass().addClass('tooltip time')
        $('.notifications-wrapper > *').hide()
        $('.notifications-wrapper > .' + current + '').show()

    }

  }

  function userInfo() {

    var newDate = new Date()
    console.log(newDate)
    $('#datetime').append(newDate)

    var user = getCookie("firstname")

    $.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2))
        var address = data.ip
        var country = data.country_code
        $('#ip-address').append(user + ', ' + country + ': ' + address)
    })
  }

  // A self playing slot machine that unlocks the characters of the play.
  // Could go as far as only showing the text that is unlocked.

  $(function () {

    checkCookie()
    userInfo()
    webcamOn()

    $('#gonzo > img.avatar').on('dblclick', function(){
      var userAnswer = prompt('From dawn till dusk, my name is...?').toLowerCase();
      if(userAnswer === 'elon musk' ) {
        winner('gon');
        winner('ren');
        winner('opt');
      } else {
        // sucks
      }
    });

    $('sup').each(function(){
      $(this).text(distractions[Math.floor(Math.random() * distractions.length)]);
    })

    $('#all').load('html/print-3.html')

    $('#spin-top, #spin-bottom').on('click', function(){
      if(spinning === 0){
        spin(1,42)
        $(this).removeClass()
        spinning = 1
      } else {
        console.log(spinning)
      }
    })


    $('.intro, .valley, .people, .world, .quotes, .time').on('click', showNotifications)

    $('.wrapper').not('.icons').on('click', function(){
      $('.notifications-wrapper, .tooltip').hide()
    })

    $(window).on('scroll', function(){

      takeSnapshot()

      $('.footnoteRef').each(function(){
        var isVisible = isElementInViewport(this)
        if(isVisible){
          if(!$(this).hasClass('done')){
            // pass last class and its id

            console.log($(this).attr('id'))

            notifyUp( $(this).attr('class').split(' ').pop(), $(this).attr('id') )

            $(this).addClass( 'done' )
          }
        }
      })
    })
  })

}())
