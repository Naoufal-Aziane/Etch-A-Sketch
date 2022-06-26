// Select the UI variables form the dom
const rangeNums = document.querySelectorAll('.range-num');
const rangeInput = document.querySelector('.input-range');
const gridContainer = document.querySelector('.grid-container');
let pixel = rangeNums[0].textContent;
const divWidth = parseInt(window.getComputedStyle(gridContainer).getPropertyValue('width')) / pixel;

// Create pixelGenerator() function
function pixelGenerator (pixel) {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${pixel},1fr)`
  for(let i = 0 ; i<pixel*pixel ;i++){
  const div = document.createElement('div');
  div.style.width = `${divWidth}`;
  div.style.height = `${divWidth}`;
  div.style.backgroundColor = '#aa9f9f';
  gridContainer.appendChild(div);
  }
}

// Create pixelColorChanger Function
function pixelColorChanger (){
const divs = document.querySelectorAll('.grid-container div');
  divs.forEach((div) => div.addEventListener('mouseover',function() { 
    let color = document.querySelector('.color-picker').value;
      this.style.backgroundColor = color
    }))
}

// create pixelLayoutChanger() function
function pixelLayoutChanger () {
  rangeNums.forEach((rangeNum) => rangeNum.textContent = this.value )
const pixel = document.querySelectorAll('.range-num')[0].textContent;
pixelGenerator(pixel); 
pixelColorChanger();
}


// Create the sketch grid layout when the dom load
window.addEventListener('DOMContentLoaded',()=> {
  pixelGenerator(pixel);
  pixelColorChanger();
});

rangeInput.addEventListener('click',pixelLayoutChanger);