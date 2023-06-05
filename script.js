const sketchArea = document.querySelector("#sketchArea");
let gridCount = 100;






for(let i = 0; i < gridCount * gridCount; i++){
    const sketchBlock = document.createElement("div");
    sketchBlock.classList.add("sketchBlock");
    sketchBlock.style.width = `${640 / gridCount}px`;
    sketchBlock.style.height = `${640 / gridCount}px`;
    sketchArea.appendChild(sketchBlock);
}


const allBlocks = document.querySelectorAll(".sketchBlock");

allBlocks.forEach(allBlocks => allBlocks.addEventListener("mouseover", () => {
    allBlocks.style.background = "green";
}));

