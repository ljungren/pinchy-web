console.log('\'Allo \'Allo!');
$( document ).ready(function() {
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
    videoId: 'qM5W7Xn7FiA', 
    start:100,
    onReady: function(){
        //$('#ytplayer').show();
        //$('#ytplayer').enterFullscreen();
        //$('#ytplayer').play();
        //$('#ytplayer').seekTo(24);
    }
      // youtube video id

  });     
});


