var ToDream = document.getElementById("Tosing");
ToDream.play()
ToDream.volume = 0.5
const MS = 89000

	setInterval(() => {
	ToDream.currentTime = 0;
		ToDream.play();
}, MS)