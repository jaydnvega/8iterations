// <---ADDITION---> Mic Activation
let mic, micLevel, circlecolour;
let amp;
let scale = 5.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  getAudioContext().suspend(); // <---ADDITION--->
  background(255, 200, 0); // <---CHANGE---> Orange-yellow canvas
  
// <---ADDITION---> Mic Activation - taken from mic_activate.js Andy's github
  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();
 
  textSize(48);
  textAlign(CENTER, CENTER);
  text("Click anywhere to start",width/2,height/2+100);
}

// <---ADDITION---> Mic Activation - taken from mic_activate.js Andy's github
function mousePressed(){
  userStartAudio();
}

function draw() {
  let horizontalSpeed = abs(pmouseX - mouseX);

  if (mouseIsPressed) {
    fill(pmouseY / 50, pmouseX / 50, (pmouseX + pmouseY) / 50); // <---CHANGE---> Darkened colour
  } else {
    fill(mouseY / 12, mouseX / 12, (mouseX + mouseY) / 12); // <---CHANGE---> Darkened colour
  }

  noStroke();

  circle(mouseX, mouseY, horizontalSpeed);

// <---ADDITION---> Mic Activation - taken from mic_activate.js Andy's github
  micLevel = mic.getLevel();
  circlecolour=int(255-micLevel*255);
  background(circlecolour,circlecolour,0, 5);
  noStroke();
  
  scale = map(micLevel, 0, 1.0, 30, width*12);

  stroke(circlecolour);
  fill(0,random(255),0);
  circle(width/2, height/2, scale);

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_5.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 200, 0); // <---CHANGE---> Orange-yellow canvas
}
