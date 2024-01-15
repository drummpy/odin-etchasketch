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
setSizeButton.addEventListener("click", () => {
  gridSize = setSize();
  console.log(gridSize);
});
resetButton.addEventListener("click", () => {
  console.log("Reset");
});
