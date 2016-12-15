require('babel-register');
const pinchyWeb = require('./pinchy-web');
pinchyWeb();

module.exports = {
  initVideo: (videoId, startTime, sendReady) => {
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
        sendReady();
      }

    });     
  },
  playVideo: () => {
    //$('#ytplayer').show();
    //$('#ytplayer').enterFullscreen();
    //$('#ytplayer').play();
    //$('#ytplayer').seekTo(24);
  }
}


