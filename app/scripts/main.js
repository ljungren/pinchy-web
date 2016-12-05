console.log('\'Allo \'Allo!');

var player, iframe;
var $ = document.querySelector.bind(document);
$(document).ready(function(){

   	$( "button" ).click(function() {
 		$( "player" ).hide( "slow" );
 		alertFunc();
 	}
	  
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

		// Get the modal

	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("playerbutton");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}// JavaScript Document

}

