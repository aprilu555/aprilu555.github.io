let theAtoms = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //for (let i = 0; i< 50; i++){
  spawnAtom();
//}
  window.setInterval(spawnAtom, 500);
}

function draw() {
  background(220);
  
 // for (let atom of theAtoms){
  // atom.x += random(-5,5);
  // atom.y += random(-5,5);
  
  for (let i = 0;  i < theAtoms.length; i++){  
    theAtoms[i].x += random(-5, 5);
    theAtoms[i].y += random(-5,5);
    
  noStroke();
  // fill(atom.theColor);
  // circle(atom.x, atom.y, atom.size);
    
    fill (theAtoms[i].theColor);
    circle (theAtoms[i].x,theAtoms[i].y, theAtoms[i].size);
}
}
function spawnAtom(){
  let atom;
  atom = {  
    x : random(width),
    y : random(height),
    size: random (5, 50),
    theColor: color(random(255), random(255), random(255), random(255)),
};
    theAtoms.push(atom);
}
     