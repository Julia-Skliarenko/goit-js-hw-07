function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    destroyBoxes();
  const amount = input.value;

  
  if (amount < 1 || amount > 100 || !Number.isInteger(+amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
    
  }
    
    input.value = '';
    
      const boxes = [];
     let defaultSizeBox = 30;
     
     for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${defaultSizeBox}px`;
    box.style.height = `${defaultSizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    defaultSizeBox += 10;
     }
     
     boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}