const sketchArea = document.querySelector("#sketchArea");
let limit = 100;






for(let i = 0; i < limit * limit; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = `${640 / limit}px`;
    block.style.height = `${640 / limit}px`;
    sketchArea.appendChild(block);
}


const blocks = document.querySelectorAll(".block");

blocks.forEach(blocks => blocks.addEventListener("mouseover", () => {
    blocks.style.background = "green";
    
}));

