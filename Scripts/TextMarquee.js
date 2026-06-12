const p1 = document.getElementById("pSpec");


animate(p1);


function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    setInterval(() => {
       element.style.marginLeft = --flag + "px";
       
       if (elementWidth == -flag) {
        flag = parentWidth;
       }
    }, 3.63453414513);
}