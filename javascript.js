const container = document.querySelector('.container');
const gridx = 16;
const gridy = 16; 

for (let i=0; i<gridx*gridy; i++){
    const div = document.createElement('div');
    const style = window.getComputedStyle(container);
    div.style.width = `${parseInt(style.maxWidth)/gridx}px`;
    div.style.height = `${parseInt(style.maxHeight)/gridy}px`;
    console.log(`${parseInt(style.maxWidth)/gridx}px`);
    div.style.backgroundColor = 'white';
    div.style.border = 'solid 2px';
    div.style.padding = '0px';
    div.style.boxSizing = 'border-box';
    container.appendChild(div);
    
}