let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(0);

  push();
  translate(mouseX, mouseY);

  tint(0, 255, 255);

  image(capture, 0, 0);

  image(capture, 0, 0, width, height, 0, 0, capture.width, capture.height, COVER);

  pop();

  filter(POSTERIZE, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_3.jpg');
  }
}
