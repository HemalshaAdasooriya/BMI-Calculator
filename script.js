var mybotton1 = document.getElementById("male");
var radiomale = document.getElementById("red");
var mybotton2 = document.getElementById("female");
var radiofemale = document.getElementById("green");

mybotton1.onclick = function() {
    radiomale.checked = true;
}
mybotton2.onclick = function() {
    radiofemale.checked = true;
}




function bmicalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}


