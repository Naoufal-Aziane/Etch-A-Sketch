// Select the UI variables form the dom
const rangeNum = document.querySelectorAll('.range-num');
const rangeInput = document.querySelector('.input-range');
const colorPicker = document.querySelector('.color-picker');
const gridContainer = document.querySelector('.grid-container');
let pixel = rangeNum[0].textContent;
const divWidth = parseInt(window.getComputedStyle(gridContainer).getPropertyValue('width')) / pixel;
// Create pixelGenerator() function

function pixelGenerator(pixel) {
  for(let i = 0 ; i<pixel*pixel ;i++){
    gridContainer.style.gridTemplateColumns = `repeat(${pixel},1fr)`
  const div = document.createElement('div');
  div.style.width = `${divWidth}`;
  div.style.height = `${divWidth}`;
  div.style.backgroundColor = '#aa9f9f';
  gridContainer.appendChild(div);
  }
}