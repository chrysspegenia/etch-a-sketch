const sketchArea = document.querySelector("#sketchArea");
const clearBtn = document.getElementById("clear");
const slideNum = document.querySelector("span");
const inputSlider = document.getElementById("inputSlider");
const inputColor = document.getElementById("colorPicker");
let modeSelection;

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideNum.textContent = value;
    // slideNum.style.left = value + "%";
    slideNum.style.bottom = (value-260) + "px";
    slideNum.classList.add("show");
    sketchArea.innerHTML = "";
    grid();
    colorMode();
});


inputSlider.onblur = (() => {
    slideNum.classList.remove("show");
});


function grid(){
    const gridCount = inputSlider.value;

    for(let i = 0; i < gridCount * gridCount; i++){
        const sketchBlock = document.createElement("div");
        sketchBlock.classList.add("sketchBlock");
        sketchBlock.style.width = `${640 / gridCount}px`;
        sketchBlock.style.height = `${640 / gridCount}px`;
        sketchArea.appendChild(sketchBlock);
    }
};
grid()

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", () => {
    modeSelection = button.id;
    colorMode();
}));


function colorMode(){
    const allBlocks = document.querySelectorAll(".sketchBlock");

    allBlocks.forEach(allBlocks => allBlocks.addEventListener("mouseover", () => {
    //trial code
    if(modeSelection == "eraser"){
        allBlocks.style.background = "white";
    } else if (modeSelection == "color"){
        allBlocks.style.background = inputColor.value;
    } else if (modeSelection == "rgb"){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256)+50;
        let b = Math.floor(Math.random() * 256)+100;
        allBlocks.style.background = `rgb(${r},${g},${b})`;
    }                                       
    //trial end
    }));
}
colorMode()

// clearBtn.addEventListener("click", () => {
//     clearGrid()
// })

clearBtn.onclick = (() => {
    clearGrid();
});

function clearGrid(){
    sketchArea.innerHTML = "";
    grid();
};

inputColor.oninput = (() => {
    modeSelection = "color";
});