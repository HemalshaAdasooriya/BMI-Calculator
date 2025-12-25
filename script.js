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


// Select the button element
const button = document.getElementById('Submit_btn');
const divresult = document.getElementById('result');

button.addEventListener('click', () => {
    // Add the 'highlight' class to the div element
    divresult.classList.add('highlight');
  });

// Get the button element
const toggleButton = document.getElementById('dark-mode-toggle');

// Add a click event listener
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});


// function toggleIcon(buttonElement) {
//     var sun = buttonElement.querySelector('#sun');
//     var moon = buttonElement.querySelector('#moon');

//     if (sun.style.display === 'inline') {
//         sun.style.display = 'none';
//         moon.style.display = 'inline';
//     } else {
//         sun.style.display = 'inline';
//         moon.style.display = 'none';
//     }
    
// }

document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('themeButton');
  var body = document.body;

  themeButton.addEventListener('click', function() {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      themeButton.textContent = 'Switch to Dark Theme';
    } else {
      body.classList.add('dark-theme');
      themeButton.textContent = 'Switch to Light Theme';
    }
  });
});