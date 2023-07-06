const container = document.querySelector('.container');
const gridx = 16;
const gridy = 16; 

// Construct the grid

function createGrid(gridx,gridy){
    for (let i=0; i<gridx*gridy; i++){
        const div = document.createElement('div');
        const style = window.getComputedStyle(container);
        div.style.width = `${parseInt(style.maxWidth)/gridx}px`;
        div.style.height = `${parseInt(style.maxHeight)/gridy}px`;
        console.log(`${parseInt(style.maxWidth)/gridx}px`);
        div.style.backgroundColor = 'white';
        div.style.border = 'solid 2px';
        div.style.padding = '0px';
        // Include the padding and border in total size
        div.style.boxSizing = 'border-box';
        div.addEventListener('mouseover',(e) => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}


const button = document.querySelector('button')
button.addEventListener('click',(e) =>{
    const squares = prompt("How many squares per side do you want for the grid?","16");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    createGrid(parseInt(squares),parseInt(squares));
});
createGrid(gridx,gridy);


