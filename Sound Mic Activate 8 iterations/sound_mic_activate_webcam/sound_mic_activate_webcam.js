let mic, micLevel, circlecolour;
let amp;
let scale = 5.0;
let capture;

function setup() {
createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  background(255,255,0);

  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();

  textSize(48);
  textAlign(CENTER, CENTER);
  text("Click anywhere to start",width/2,height/2+100);
  
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function mousePressed(){
userStartAudio();
}

function draw() {
  micLevel = mic.getLevel();
  circlecolour=int(255-micLevel*255);
  background(circlecolour,circlecolour,0, 10);
  noStroke();
  
  scale = map(micLevel, 0, 1.0, 50, 500);

  stroke(circlecolour);
  fill(0,random(255),0);
  circle(width/2, height/2, scale);
  
  push();

  translate(width / 8, height / 8);

  image(capture, 0, 0);

  pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_6.jpg');
  }
}
