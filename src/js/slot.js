var exports = module.exports = {};

exports.randomInterval = function (min, max) {
	console.log('randomInterval called')
  return Math.floor(Math.random() * (max - min + 1) + min)
}

exports.scrollToElement = function (col, el, ms) {

  console.log('scrollToElement called. Going to: ' + $(el).offset().top)

  // $(el).addClass('debug')

  var speed = (ms) ? ms : 600

  return new Promise(function(resolve, reject){
      $(col).animate({
        scrollTop: $(el).position().top
    }, speed, 'swing', resolve);
  });
}

exports.resetScroll = function(col, el, ms){
  console.log('resetScroll called')
  var speed = (ms) ? ms : 600

  $(col).animate({
    scrollTop: $(el).scrollTop()
  }, speed, 'swing', function(){
    $('#spin').addClass('spin')
    spinning = 0
  })
}

exports.checkResult = function() {
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

    Slot.winner()
}

exports.winner = function () {
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

exports.spin = function (min, max) {

	console.log('spin called');

  	SetTimeout(function(){
          Slot.checkResult(winner)
  		    Slot.resetScroll('.l, .m, .r', 'h1:nth-child(1)', 400)
  	}, 10000)

    result1 = Slot.randomInterval(min, max),
    result2 = Slot.randomInterval(min, max),
    result3 = Slot.randomInterval(min, max)

    var p1 = Slot.scrollToElement('.l', '.l h1:nth-child(' + (result1 + 1) + ')', Slot.randomInterval(2000, 4000))
    var p2 = Slot.scrollToElement('.m', '.m h1:nth-child(' + (result2 + 1) + ')', Slot.randomInterval(3000, 6000))
    var p3 = Slot.scrollToElement('.r', '.r h1:nth-child(' + (result3 + 1) + ')', Slot.randomInterval(6000, 8000))

      Promise.all([p1, p2, p3]).then(function(){
          console.log('spinning done!!')
          Slot.checkResult(winner)
      });

}