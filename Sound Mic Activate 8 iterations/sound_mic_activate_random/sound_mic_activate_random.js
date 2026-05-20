let mic, micLevel, circlecolour;
let amp;
let scale = 5.0;

function setup() {
createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  background(random(255), random(255), random(255), random(30));

  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();

  textSize(48);
  textAlign(CENTER, CENTER);
  text("Click anywhere to start",width/2,height/2+100);
}

function mousePressed(){
userStartAudio();
}

function draw() {
  micLevel = mic.getLevel();
  circlecolour=int(255-micLevel*255);
  background(random(255), random(255), random(255), random(30));
  noStroke();
  
  scale = map(micLevel, 0, 1.0, 50, 500);

  stroke(circlecolour);
  fill(random(255), random(255), random(255));
  circle(width/2, height/2, scale);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_3.jpg');
  }
}
