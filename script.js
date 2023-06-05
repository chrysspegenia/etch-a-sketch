const sketchArea = document.querySelector("#sketchArea");
// const block = document.createElement("div");
let limit = 100;

// block.classList.add("block");
// block.textContent = "1";





for(let i = 0; i < limit * limit; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    // block.textContent = "";
    block.style.width = `${640 / limit}px`;
    block.style.height = `${640 / limit}px`;
    sketchArea.appendChild(block);
    // for(let j = 0; j < limit; j++){
    //     const block = document.createElement("div");
    //     block.classList.add("block");
    //     block.textContent = "";
    //     sketchArea.appendChild(block);
    // }
}


//find out how to select newly created divs in loop
const blocks = document.querySelectorAll(".block");

blocks.forEach(blocks => blocks.addEventListener("mouseover", () => {
    blocks.style.background = "green";
    
}));


// sketchArea.appendChild(block);
