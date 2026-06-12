var placeholder = document.getElementById("8831");
var time = 7000
var path = "..\\Pictures\\8831\\"
var ImageArr = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "7.gif", "8.gif", 
"9.gif", "10.gif", "11.gif", "12.gif", "13.gif", "14.gif", "15.gif", "16.gif", "17.gif", 
"18.gif", "19.gif", "20.gif", "21.gif", "22.gif", "23.gif", "24.gif", "25.gif", 
"26.gif", "50.gif", "28.gif", "29.gif", "30.gif", "31.gif", "32.gif", 
"33.gif", "34.gif", "35.gif", "36.gif", "37.gif", "38.gif", 
"39.gif", "40.gif", "41.gif", "42.gif", "43.gif", ];





setInterval(() => {
	var number = Math.floor(Math.random() * (ImageArr.length+1));
var path = '..\\Pictures\\8831\\' + ImageArr[number]
placeholder.src = path
}, time);
	



 	
