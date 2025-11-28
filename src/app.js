import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Carolina from the console!");
};
let who = ['The dog', 'My grandma', 'The mailman', 'My bird','My friend'];
let action = ['ate', 'peed', 'crushed', 'broke','call'];
let what = ['my homework', 'my phone', 'the car', 'the glass','my house'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex)
    return arr[randomIndex];
}
function generateExcuse() {
    let excuse = getRandomElement(who) + ' ' + getRandomElement(action) + ' ' +  getRandomElement(what) + ' ' +  getRandomElement(when) + '.';
   console.log(excuse)
    return excuse;
}
function displayExcuse() {
    let excuseElement = document.querySelector('.textExcuse');
    let newExcuse = generateExcuse();
    excuseElement.innerHTML = newExcuse;
}

let button = document.querySelector('.btn-genera');
button.addEventListener('click', displayExcuse);    
