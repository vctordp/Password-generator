const button = document.querySelector('#button');
const result = document.querySelector('#result');
const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");

const symbol = ['@','!','*', '$'];
let password = '';

function getRandomSymbol(){
  return Math.floor(Math.random() * symbol.length);
}


function generatePass() {
  
  let input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');

  const letterToNumberCheck = document.querySelector('#letterToNumber');
  const upperCaseCheck = document.querySelector('#enableUpperCase');
  let number = -2;

  if(input.length > 0) {

    if (letterToNumberCheck.checked === true) {
      input = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
    } else {
      input;
    }

    if (upperCaseCheck.checked) {
      input = input.split('').map((v) =>
      Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
      ).join('');
    } else
         input;


    password = symbol[getRandomSymbol()] + input + symbol[getRandomSymbol()] + Math.random().toString(32).slice(number);
    result.innerHTML = password;

    copyButton.classList.add("--display");
    setTimeout(function () {
      result.innerHTML = ''; copyButton.classList.remove("--display");
    }, 70000)
  }
}

function copyResult(result) {
  const textArea = document.createElement("textArea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  
  copied.classList.add("--show");
  setTimeout(function() {copied.classList.remove("--show");}, 2500);
}

var slideIndex = 1;
 
showImage(slideIndex);
 
function plusIndex(n){
    showImage(slideIndex += n);
}

function currentSlide(n){
    showImage(slideIndex = n)
}

function showImage (n){
    var slide = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");

    if ( n > slide.length) {slideIndex = 1};        
    if ( n < 1 ) {slideIndex = slide.length};

    for (var i =0;  i < slide.length; i++) {
        slide[i].style.display = "none";  
    };
 
    slide[slideIndex - 1].style.display = "block";

    for (var  i = 0; i < dots.length; i++) {
        dots[i].className = dots [i].className.replace(" active", "")
    }

    dots[slideIndex - 1].className += " active"
}

function show(){
    document.getElementById('sidebar').classList.toggle('active');
}




