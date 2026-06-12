var pop = document.getElementById("f20");
const Miliseconds = 1100;
var hascompleted = false;


setInterval(() => {
	if (hascompleted == false) {
		pop.style.display = '';
			hascompleted = true;

		
	} else {
	pop.style.display = 'none';
}
}, Miliseconds);
	
