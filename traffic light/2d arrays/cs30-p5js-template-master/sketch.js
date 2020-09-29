// Traffic Light
// April Lu
// September 23, 2020


let state = "green";
let switchTime, startTime;


function setup() {
  createCanvas(windowWidth, windowHeight);

  switchTime = 2000;
  startTime = 0;
}

function draw() {
  background(220);
  drawOutlineOfLights();
  switchLights();
}

function drawOutlineOfLights(){
  //box
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill("white");
  circle(width/2, height/2 - 65, 50); // top
  circle(width/2, height/2, 50); // middle
  circle(width/2, height/2 + 65, 50); // bottom
}

function switchLights(){
  if (state === "red"){
    fill("red");
    circle(width/2, height/2 - 65, 50); 
    if (millis()>switchTime + startTime + 2000){
      state = "green";
      startTime = millis();
    }
}
  else if (state === "yellow"){
    fill ("yellow");
    circle(width/2, height/2, 50); 
    if (millis()> switchTime + startTime){
      state = "red";
      startTime = millis();
    }
  }
  else if (state === "green"){
    fill ("green");
    circle(width/2, height/2 + 65, 50); 
    if (millis()> switchTime + startTime + 3000){
      state = "yellow";
      startTime = millis();
    }
  }

}