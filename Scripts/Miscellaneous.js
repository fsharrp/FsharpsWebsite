// Miscellaneous for just hiding and showing and other things.

var Element0 = document.getElementById("Mod");
var Element1 = document.getElementById("plant1");
var IsShowing = false;
Element0.style.display = 'none'
// 1
document.getElementById("plant1").onclick = function() {DoSomething()};

function DoSomething() {

	if (IsShowing == true) {
 		 Element0.style.display = 'none';
			IsShowing = false;
				
		} else { 
		Element0.style.display = '';
			IsShowing = true;
				
	}
};

// 2

