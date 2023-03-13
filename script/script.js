
const grid = document.querySelector('.grid');
const button = document.querySelector('button');
const slider = document.querySelector('.slider');
const output = document.querySelector('.slider-output');
const black = document.querySelector('#black');
const rgb = document.querySelector('#rgb');

let blackTrue = true;

function clearGrid(){
    
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

}

function checkBlackOrRGB(item){
    if (blackTrue){
        item.forEach(i => i.addEventListener('click',()=>{
            item.forEach(i => i.addEventListener('mouseenter',()=>{
                i.classList.add('etching');
            }))
        }));
    }
    else{
        item.forEach(i => i.addEventListener('click',()=>{
            item.forEach(i => i.addEventListener('mouseenter',()=>{
                i.style.cssText = `background-color:rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
            }))
        }));
    }
}

function createGrid(val){
    clearGrid();
    grid.style.cssText = `grid-template-columns:repeat(${val}, 1fr);`
    for (let i = 0; i < val*val ; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add("gridItem");

        grid.appendChild(newDiv);
    }
    const item = document.querySelectorAll('.gridItem');

    checkBlackOrRGB(item);
      
    slider.value = val;
    output.innerHTML = "Grid Size = "+slider.value;
}


function main(){
    
    createGrid(20);


    button.addEventListener('click', ()=>{
        createGrid(slider.value);
    });

    slider.addEventListener('input',()=>{
        output.innerHTML = "Grid Size = "+ slider.value;
    });
}

black.addEventListener('click',()=>{
    console.log("true");
    blackTrue = true;
});
rgb.addEventListener('click',()=>{
    console.log("madefalse");
    blackTrue = false;
});

main();