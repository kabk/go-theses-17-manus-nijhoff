takeSnapshot = function() {
  console.log('snap')
  Webcam.snap( function(data_uri) {
    webcamSnaps.push(data_uri)
    if(webcamSnaps.length > 1000) {
      //remove 1st
      webcamSnaps.splice(0, 1)
    }
    secondReflection(data_uri)
    avatarImage()
  } )
}

secondReflection = function (img) {
    $('#webcam').html('<img src="'+img+'"/>')
}

avatarImage = function () {
  $('.avatar.winner').each(function(){
    $(this).attr('src', webcamSnaps[Math.floor( Math.random() * webcamSnaps.length ) ] )
  })
}

webcamOn = function() {

  Webcam.set({
    width: 320,
    height: 240,
    fps: 2
  });

  Webcam.attach( '#my_camera' ) 

  Webcam.on('load', function(){
    takeSnapshot()  
  })

}