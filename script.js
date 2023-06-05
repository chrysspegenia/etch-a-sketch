const sketchArea = document.querySelector("#sketchArea");
const slideNum = document.querySelector("span");
const inputSlider = document.querySelector("input");


inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideNum.textContent = value;
    slideNum.style.left = value + "%";
    slideNum.classList.add("show");
    sketchArea.innerHTML = "";
});


inputSlider.onblur = (() => {
    slideNum.classList.remove("show");
});


const gridCount = inputSlider.value;

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

