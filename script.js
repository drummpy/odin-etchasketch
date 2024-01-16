function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    createColumn(size, gridRow);
    gridRow.setAttribute("id", "row");
    gridRow.classList.add("grid-row");
    boxContainer.appendChild(gridRow);
  }
}

function createColumn(size, currentRow) {
  for (let i = 0; i < size; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-box");
    currentRow.appendChild(gridColumn);
  }
}

function removeGrid() {
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
}

function setSize() {
  let newSize = prompt("Enter your new grid size", "16");

  if (newSize != null) {
    return +newSize;
  }
}

const boxContainer = document.querySelector(".box-container");
const setSizeButton = document.querySelector("#set-size-button");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;
createGrid(gridSize);

setSizeButton.addEventListener("click", () => {
  gridSize = setSize();
  removeGrid();
  createGrid(gridSize);
  console.log(gridSize);
});
resetButton.addEventListener("click", () => {
  removeGrid();
  createGrid(gridSize);
  console.log("reset");
});
