// Sudoku 2d array


let sudoku;
let initialState;

const GRIDSIZE = 9;
let cellSize;
let cell;

function preload(){
  sudoku = loadStrings("assets/1.txt");
  initialState = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //convert sudoku into 4d array
  for(let i = 0; i < sudoku.length; i++){
    sudoku[i] = sudoku[i].split(",");
    initialState[i] = initialState[i].split(",");
  }

  //loop through the whole 2d array, and turn everythign into numbers
  for (let y = 0; y < GRIDSIZE; y++){
    for (let x = 0; x < GRIDSIZE; x++){
      sudoku[y][x] = int(sudoku[y][x]);
      initialState[y][x] = int(initialState[y][x]);

    }
  }

  if(width < height){
    cellSize = width/GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
} 

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < GRIDSIZE; y++){
    for (let x = 0; x < GRIDSIZE; x++){
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);

      for (let y = 0; y <= GRIDSIZE; y = y + 3){
        strokeWeight(3);
        line (x*cellSize, y*cellSize, 9*cellSize, y*cellSize);
        strokeWeight(1);

        for (let x =  0; x <= GRIDSIZE; x = x + 3){
          strokeWeight(3);
          line (x*cellSize, y*cellSize, x*cellSize, 9*cellSize);
          strokeWeight(1);
        }
      }

      if (sudoku[y][x] !== 0){

        if (initialState[y][x] !==0 ){
          fill(0);
        }
        else{
          fill("grey");
        }
        textSize(cellSize * 0.8);
        textAlign(CENTER, CENTER);
        text(sudoku[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
      }
    }
  }
}

function mousePressed(){
  let cellX = floor(mouseX / cellSize);
  let cellY = floor(mouseY / cellSize);

  changeCell(cellX, cellY);

}

function changeCell(x, y){
  if (initialState[y][x] === 0){
    sudoku[y][x] = (sudoku[y][x] + 1) % 10 ;
  }
}
