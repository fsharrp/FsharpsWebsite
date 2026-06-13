document.addEventListener("DOMContentLoaded", () => {
    var placeholder = document.getElementById("ad");
    var ImageArr = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "7.gif", "8.gif", "9.gif", "10.gif", "11.gif", "12.gif", "13.gif"];
    var time = 5000;

    setInterval(() => {
        var number = Math.floor(Math.random() * ImageArr.length);
        
        // 1. Used forward slashes 
        // 2. Added Date.now() to prevent the browser from caching and breaking the image
        var imagePath = '../Pictures/fauxad/' + ImageArr[number] + '?t=' + Date.now();
        
        placeholder.src = imagePath;
        
    }, time);
});
