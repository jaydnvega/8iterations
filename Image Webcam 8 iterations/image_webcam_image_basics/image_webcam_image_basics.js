let capture;
let bgImage;

function preload() {
  bgImage = loadImage("data/AdobeStock_1790311834.jpeg");  //change this to reflect YOUR image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(bgImage, 0, 0, width, height);
  
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(capture, 0, 0);

  pop();

  filter(THRESHOLD);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_8.jpg');
  }
}
