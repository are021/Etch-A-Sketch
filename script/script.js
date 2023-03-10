
const grid = document.querySelector('.grid');

function createGrid(val){
    grid.style.cssText = `grid-template-columns:repeat(${val}, 1fr);`
    for (let i = 0; i < val*val ; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add("gridItem");

        grid.appendChild(newDiv);
    }
    const item = document.querySelector('.gridItem');
    item.addEventListener('mouseover',addColor);

}
function addColor(e){
    e.target.style.background = 'black';
}



const gridSize = prompt("how big do you want the grid?")
createGrid(gridSize);