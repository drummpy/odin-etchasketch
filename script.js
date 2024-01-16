function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    createColumn(size, gridRow);
    gridRow.classList.add("grid-row");
    boxContainer.appendChild(gridRow);
  }
}

function createColumn(size, currentRow) {
  for (let i = 0; i < size; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-box");
    gridColumn.addEventListener("mouseover", () => {
      gridColumn.classList.replace("grid-box", "grid-box-change");
    });
    currentRow.appendChild(gridColumn);
  }
}

function resetGrid(gridSize) {
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
  createGrid(gridSize);
}

function setSize() {
  let newSize = +prompt("Enter your new grid size", "16");
  console.log(newSize);
  if (newSize > 1 && newSize <= 100) {
    return newSize;
  } else {
    alert("Please pick a number less than 100");
    return gridSize;
  }
}

const boxContainer = document.querySelector(".box-container");
const setSizeButton = document.querySelector("#set-size-button");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;
createGrid(gridSize);

setSizeButton.addEventListener("click", () => {
  gridSize = setSize();
  resetGrid(gridSize);
  console.log(gridSize);
});
resetButton.addEventListener("click", () => {
  resetGrid(gridSize);
  console.log("reset");
});
