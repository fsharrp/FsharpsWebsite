var text1 = document.getElementById("pSpec");
var targetSound = document.getElementById("8831");
var soundToPlay = document.getElementById("Hok");
var sountToPlay = document.getElementById("glass");
var happened = false;
const MS = 10000;
var shattered = false;
let ticket = 0;
i = 1;
p = 0;
function TriggerCall() {
	if (ticket == 10) {
	
sountToPlay.currentTime = 0;
	targetSound.style.display ='none';
	sountToPlay.play();
	shattered = true;
	happened = ++happened;

} else if (ticket >= 10){
ticket = 0;
	
	

} else  {
	soundToPlay.currentTime = 0;
	soundToPlay.volume = 0.5
	soundToPlay.play();
	ticket = ++ticket;
}

if (happened == 1 && shattered == true) {
console.log('something has occured...');

} else if ( happened == 2){
console.log('seriously?');
} else if ( happened == 4){
 console.log('I payed for these gifs you know.');
}	else if ( happened == 5){
 console.log('Last chance, ill do something!');
}else if ( happened == 6){
text1.textContent = "Could you not?";
 console.log('...');
}else if ( happened == 7){
window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
}




};


setInterval(() => {
	if (shattered == true) {
		ticket = 0;
		targetSound.style.display = '';
		shattered = false;
		
	} else {
	ticket = 0;
}
}, MS);
	



 	



