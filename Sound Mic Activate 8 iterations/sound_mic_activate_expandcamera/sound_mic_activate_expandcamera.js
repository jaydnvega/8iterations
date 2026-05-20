let mic, micLevel; // <--- Claude helped throughout this as combining two codes did not work --->
let capture;
let scale = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  getAudioContext().suspend();

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  mic = new p5.AudioIn();
  mic.start();

  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Click anywhere to start", width / 2, height / 2 + 100);
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  background(0);

  micLevel = mic.getLevel();

  scale = map(micLevel, 0, 1, 0.8, 2.5);

  // <--- Claude helped here when inputting webcam code straight from Andy's GIThub didn't fully work --->
  let camWidth = capture.width * scale;
  let camHeight = capture.height * scale;

  image(
    capture,
    width / 2 - camWidth / 2,
    height / 2 - camHeight / 2,
    camWidth,
    camHeight
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_8.jpg');
  }
}
