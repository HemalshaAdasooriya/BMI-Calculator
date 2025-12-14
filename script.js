var mybotton = document.getElementById("male");
var radiomale = document.getElementById("red");

mybotton.onclick = function() {
    radiomale.checked = true;
}




function bmicalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}


