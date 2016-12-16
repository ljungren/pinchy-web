require('babel-register');
const pinchyWeb = require('./pinchy-web');
pinchyWeb.init;

module.exports = {
  initVideo: (videoId, startTime, sendReady) => {
    console.log('init video');

    $('#ytplayer').YTplayer({
      // Basic setting
      width: 1000,                // video width
      height: 560,                // video height
      videoId: videoId, 
      start: startTime,
      onReady: function(){
        $('#ytplayer').play();
        $('#ytplayer').pause();
        sendReady();
      }

    });     
  },
  showQuestion: () => {
    //show loading screen until play
    $("#myWish").click(() => {
      $("#success-alert").alert();
      $("#success-alert").fadeTo(2000, 500).slideUp(500, () => {
        $("#success-alert").slideUp(500);
      });   
    });
    //hide question after 10 sec
    setTimeout(() => {
      $('#ytplayer').hide();
      $("#success-alert").hide();
    }), 10000);
  },
  hideQuestion: () => {
    $('#ytplayer').hide();
    $("#success-alert").hide();
  },
  playVideo: (startTime) => {
    console.log('timing video');
    console.log('increased timerTime 100 ms');
    $('#ytplayer').show();
    $('#ytplayer').enterFullscreen();
    $('#ytplayer').play();
    $('#ytplayer').seekTo(startTime);
  }
}




