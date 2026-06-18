var ToDream = document.getElementById("Tosing");
ToDream.play()
ToDream.volume = 0.5
const MS = 63000 

	setInterval(() => {
	ToDream.currentTime = 0;
		ToDream.play();
}, MS)