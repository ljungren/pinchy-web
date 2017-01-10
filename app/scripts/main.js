require('babel-register');
const pinchyWeb = require('./pinchy-web');

$( document ).ready(function() {
  $("#success-alert").removeClass('in');
  $('#ytplayer').hide();
  pinchyWeb.init;
});

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
    //show question on screen
    console.log('show question on screen');
    //$(".alert").alert();
    $("#success-alert").addClass('in');

    setTimeout(() => {
      $("#success-alert").removeClass('in');
    }, 10000);
  },
  hideQuestion: () => {
    //hide question
    console.log('hide question');
    $("#success-alert").removeClass('in');
    $('#ytplayer').hide();
  },
  pulse: () => {
    $("#logo").addClass('pulsate-logo');
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




