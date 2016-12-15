require('babel-register');
const pinchyWeb = require('./pinchy-web');
pinchyWeb.init;

module.exports = {
  initVideo: (videoId, startTime, sendReady) => {
    console.log('init video');
    $('#ytplayer').hide();
    $("#success-alert").hide();
    $("#myWish").click(function showAlert() {
      $("#success-alert").alert();
      $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#success-alert").slideUp(500);
      });   
    });

    $('#ytplayer').YTplayer({
      // Basic setting
      width: 1000,                // video width
      height: 560,                // video height
      videoId: videoId, 
      start: startTime,
      onReady: function(){
        //callback for sending response
        console.log('sendReady');
        sendReady();
      }

    });     
  },
  playVideo: (startTime) => {
    console.log('playing video');
    $('#ytplayer').show();
    $('#ytplayer').enterFullscreen();
    $('#ytplayer').play();
    $('#ytplayer').seekTo(startTime);
  }
}


