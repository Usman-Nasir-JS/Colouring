console.log("Hello World!");

var handelColor = "";
let previousDiv = null;

function selectColor(div, colors) {
    console.log(previousDiv);
    
    if (previousDiv != null) {
        previousDiv.style.borderWidth = '2px';
    }

    handelColor = colors;
    previousDiv = div;
    div.style.borderWidth = '3.5px';
}

function changeColor(div) {
    console.log("handelColor ===>", handelColor);
    
    div.style.backgroundColor = handelColor;
    div.style.borderWidth = handelColor;
    div.style.borderColor = "black";
}
