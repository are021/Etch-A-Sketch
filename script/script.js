
const grid = document.querySelector('.grid');
const button = document.querySelector('button');

function createGrid(val){
    grid.style.cssText = `grid-template-columns:repeat(${val}, 1fr);`
    for (let i = 0; i < val*val ; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add("gridItem");

        grid.appendChild(newDiv);
    }
}




const gridSize = prompt("how big do you want the grid?")
createGrid(gridSize);

const item = document.querySelectorAll('.gridItem');

item.forEach(i => i.addEventListener('mouseenter',()=>{
    i.classList.add('etching');
}));
button.addEventListener('click', ()=>{
    for (const val of item){
        val.classList.remove('etching');
    }
    
});

