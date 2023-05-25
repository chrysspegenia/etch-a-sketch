const sketchArea = document.querySelector("#sketchArea");
// const block = document.createElement("div");
let limit = 10;

// block.classList.add("block");
// block.textContent = "1";

for(i = 0; i < limit; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    // block.textContent = "";
    sketchArea.appendChild(block);
    for(j = 0; j < limit; j++){
        const block = document.createElement("div");
        block.classList.add("block");
        // block.textContent = "";
        sketchArea.appendChild(block);
    }
}




// sketchArea.appendChild(block);
