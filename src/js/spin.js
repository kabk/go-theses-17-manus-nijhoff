console.log(spinning)

spin = function (min, max) {

	console.log('spin called');

  	setTimeout(function(){
      checkResult(winner)
  		resetScroll('.l, .m, .r', 'h1:nth-child(1)', 400)
  	}, 10000)

    result1 = randomInterval(min, max),
    result2 = randomInterval(min, max),
    result3 = randomInterval(min, max)

    var p1 = scrollToElement('.l', '.l h1:nth-child(' + (result1 + 1) + ')', randomInterval(2000, 4000))
    var p2 = scrollToElement('.m', '.m h1:nth-child(' + (result2 + 1) + ')', randomInterval(3000, 6000))
    var p3 = scrollToElement('.r', '.r h1:nth-child(' + (result3 + 1) + ')', randomInterval(6000, 8000))

      Promise.all([p1, p2, p3]).then(function(){
          console.log('spinning done!!')
          checkResult(winner)
      });

}

randomInterval = function (min, max) {
  console.log('randomInterval called')
  return Math.floor(Math.random() * (max - min + 1) + min)
}

scrollToElement = function (col, el, ms) {

  console.log('scrollToElement called. Going to: ' + $(el).offset().top)

  // $(el).addClass('debug')

  var speed = (ms) ? ms : 600

  return new Promise(function(resolve, reject){
      $(col).animate({
        scrollTop: $(el).position().top
    }, speed, 'swing', resolve);
  })

}

resetScroll = function (col, el, ms){
  console.log('resetScroll called')
  var speed = (ms) ? ms : 600

  $(col).animate({
    scrollTop: $(el).scrollTop()
  }, speed, 'swing', function(){
    $('#spin').addClass('spin')
    spinning = 0
  })
}

checkResult = function (callback) {
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

winner = function (cheat) {
    console.log('winner called...')

    $('#gonzo #renegade #optimo').removeClass();

    if (gonzo === 1 || cheat === 'gon') {
      console.log('cheating winning')
      $('#gonzo > .avatar').addClass('winner')
      avatarImage()
      $('#gonzo .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
  console.log('gonzo')
    }
    if (optimo === 1 || cheat === 'opt') {
      $('#optimo > .avatar').addClass('winner')
      avatarImage()
      $('#optimo .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
  console.log('optimo')
    }
    if (renegade === 1 || cheat === 'ren') {
      $('#renegade > .avatar').addClass('winner')
      avatarImage()
      $('#renegade .description').css({ 'color' : 'rgba(255, 255, 255, 1)' })
  console.log('renegade')
    }
}