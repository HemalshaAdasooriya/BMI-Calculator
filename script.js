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




// function bmicalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi;
// }

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    const resultDiv = document.getElementById('result');
    var bmi = weight / (height * height);
    const cal = bmi.toFixed(2);

    
 resultDiv.innerHTML = `
        <p>Your BMI: <strong>${cal}</strong></p>
        
    `;
}