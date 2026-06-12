var audio = document.getElementById("window")
var WasPlayed = "False";
var Theme = document.getElementById("Theme")
function play() {

    
 if (WasPlayed == "True") {
    	console.log('0');
 } else {
    audio.currentTime = 0;
    audio.play();
	WasPlayed="True";
  
 }
};

//function ThemePlay() {
//Theme.play();
//};

//ThemePlay();