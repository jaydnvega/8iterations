let mic, micLevel, imageColour;
let amp;
let scale = 5.0;
let img;

function preload() {
  img = loadImage("data/handy-person.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  getAudioContext().suspend();

  mic = new p5.AudioIn();
  mic.start();

  textSize(48);
  textAlign(CENTER, CENTER);
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  micLevel = mic.getLevel();

  imageColour = int(255 - micLevel * 255);

  background(imageColour, imageColour, 0, 20);

  let size = map(micLevel, 0, 0.2, 100, 600);
// <--- ADDITION --->
  imageMode(CENTER);

  let aspect = img.height / img.width;

  let imageW = size;
  let imageH = size * aspect;

  image(img, width / 2, height / 2, imageW, imageH);

  fill(255);
  noStroke();
  text("Click anywhere to start", width / 2, height / 2 + 320);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_1.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
