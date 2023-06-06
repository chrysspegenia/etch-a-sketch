const sketchArea = document.querySelector("#sketchArea");
const clearBtn = document.getElementById("clear");
const slideNum = document.querySelector("span");
const inputSlider = document.querySelector("input");
let modeSelection;

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideNum.textContent = value;
    slideNum.style.left = value + "%";
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
        allBlocks.style.background = "green"; //set up color wheel to choose color
    } else if (modeSelection == "rgb"){
        allBlocks.style.background = "red"; //set up rgb randomizer r = Math.floor(math.random * 256);
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