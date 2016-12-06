console.log('\'Allo \'Allo!');

var player, iframe;

$(document).ready(function(){
	
	
    $("#success-alert").hide();
    $("#myWish").click(function showAlert() {
        $("#success-alert").alert();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        	$("#success-alert").slideUp(500);
        });
    });
 	
/*

   	$( "button" ).click(function() {
 		$( "player" ).hide( "slow" );
 		alertFunc();
 	}

 	$( "p" ).click(function(){
        alertFunc();
    });*/
	  
	// init player

	function onYouTubeIframeAPIReady() {
	  player = new YT.Player('player', {
	    height: '200',
	    width: '300',
	    videoId: 'YPvdqYpJvvU',
	    events: {
	      'onReady': onPlayerReady
	    }
	  });
	}
	// when ready, wait for clicks
	function onPlayerReady(event) {
	  var player = event.target;
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

	function alertFunc(){
		alert('Hello');

	// Get the button that opens the modal
	var btn = document.getElementById("playerbutton");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	}

	//JavaScript Document
});

        


