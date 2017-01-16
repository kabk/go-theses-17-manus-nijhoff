(function () {

  'use strict'

  var gonzo, optimo, renegade
  var result1, result2, result3
  var clicked

  global.spinning = 0
  
  global.$ =    require('jquery')

                require('./spin.js')
                require('./cookies.js')
              
  var Webcam =  require('./webcam.min.js')

  window.jQuery = $

  var webcamSnaps = []
  
  // WEBCAM

  function takeSnapshot(max) {
      Webcam.snap( function(data_uri) {
        webcamSnaps.push(data_uri)
        if(webcamSnaps.length > max) {
          //remove 1st
          webcamSnaps.splice(0, 1)
        }
          $('.avatar').each(function(){
            $(this).attr('src', webcamSnaps[Math.floor( Math.random() * webcamSnaps.length ) ] )
          })
          $('#webcam').html('<img src="'+data_uri+'"/>')
      })
  }

  function webcamOn() {

    Webcam.set({
      width: 320,
      height: 240,
      fps: 2
    });

    Webcam.attach( '#my_camera' ) 
  }

  // NOTIFICATIONS

  function isElementInViewport (el) {

      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }

      var rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
  }

  function notifyUp(lastClass, thisId) {

    if( lastClass === 'people' || lastClass === 'quotes' || lastClass === 'world' ){
      $('.notifications.' + lastClass + '').show().html(function(i, val){
        return val * 1 + 1
      })

      // check for matching element
      var el = $('.notifications-wrapper').find("[data-link='" + thisId + "']")
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
        $('.people > .content.unlocked').show()
  	} else if( current === 'quotes' ) {
      	$('.tooltip').removeClass().addClass('tooltip quotes')
        $('.quotes > .content.unlocked').show()
  	} else if (current === 'world' ) {
      	$('.tooltip').removeClass().addClass('tooltip world')
        $('.world > .content.unlocked').show()
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

  // A self playing slot machine that unlocks the characters of the play.
  // Could go as far as only showing the text that is unlocked.

  $(function () {

    checkCookie()
    userInfo()
    webcamOn()

    $('#all').load('html/print-3.html')

    $('#spin').on('click', function(){
      if(spinning === 0){
        spin(1,42)
        $(this).removeClass()
        spinning = 1
      } else {
        console.log(spinning)
      }
    })

    $('.people, .quotes, .world').on('click', showNotifications)
    
    $('.wrapper').not('.icons').on('click', function(){
      $('.notifications-wrapper').hide()
    })

    $(window).on('scroll', function(){

      takeSnapshot(100)
      
      $('.footnoteRef').each(function(){
        var isVisible = isElementInViewport(this)
        if(isVisible){
          if(!$(this).hasClass('done')){
            // pass last class and its id
            notifyUp( $(this).attr('class').split(' ').pop(), $(this).attr('id') )
            $(this).addClass( 'done' ) 
          }
        }
      })
    })
  })

}())
