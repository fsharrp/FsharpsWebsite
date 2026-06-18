var ToDream = document.getElementById("Dream");
ToDream.play()
const MS = 52000

	setInterval(() => {
	ToDream.currentTime = 0;
		ToDream.play();
}, MS)