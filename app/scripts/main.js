console.log('\'Allo \'Allo!');

$(document).ready(function(){

$("#success-alert").hide();
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player, iframe;


      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '270',
          width: '440',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      //event.target.playVideo();

        player = event.target;
	  	iframe = $("#player"); 
	  	$( "#playerbutton" ).click(function() {
	  			playFullscreen();
      	}
  	}

    function playFullscreen(){
		var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
	  	if (requestFullScreen) {requestFullScreen.bind(iframe)();
	  		console.log('\'VAFAN!');
	  	}

	  	player.playVideo();//won't work on mobile
	  
	  	
	}

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for twelwe seconds and then stop.
      
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


 // 2. This code loads the IFrame Player API code asynchronously.
 /*
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player, iframe;

$(document).ready(function(){
	$( "button" ).click(function() {
  		$( "player" ).hide( "slow" );
		});
	
    $("#success-alert").hide();
    $("#playerbutton").click(function showAlert() {

        $("#success-alert").alert();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        	$("#success-alert").slideUp(500);
        });
    });
	  
	// init player

	function onYouTubeIframeAPIReady() {
  		player = new YT.Player('player', {
    	height: '390',
    	width: '640',
    	videoId: 'M7lc1UVf-VE',
    	events: {
      		'onReady': onPlayerReady,
      		'onStateChange': onPlayerStateChange
    }
  });
}
	// when ready, wait for clicks
	function onPlayerReady(event) {
	  player = event.target;
	  iframe = $('#player');
	  setupListener(); 
	}

	function setupListener (){
	$('button').addEventListener('click',playFullscreen);
	}

	function playFullscreen(){
	  player.playVideo();//won't work on mobile
	  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
	  if (requestFullScreen) {
	    requestFullScreen.bind(iframe)();
	  }
	}
	*/
	
/*

// init player

	function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
	// when ready, wait for clicks
	function onPlayerReady(event) {
	  var player = event.target;
	  iframe = $("#player");
	  setupListener(); 
	}

	function setupListener (){
	$('button').addEventListener('click',playFullscreen);
	}
	window.playFullscreen = function(){
		player.playVideo();//won't work on mobile
	  
	  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
	  if (requestFullScreen) {
	    requestFullScreen.bind(iframe)();
	  }
	}
	function playFullscreen(){

	  player.playVideo();//won't work on mobile
	  
	  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
	  if (requestFullScreen) {
	    requestFullScreen.bind(iframe)();
	  }
	}*/
});

        


