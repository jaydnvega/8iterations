// <--- ADDITION ---> image_webcam.js from Andy's GIThub combination
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0, 255, 0);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  
  let horizontalSpeed = abs(pmouseX - mouseX);

  if (mouseIsPressed) {
    fill(pmouseY / 4, pmouseX / 4, (pmouseX + pmouseY) / 4);
  } else {
    fill(mouseY / 2, mouseX / 2, (mouseX + mouseY) / 2);
  }

  noStroke();
  circle(mouseX, mouseY, horizontalSpeed);

// <--- ADDITION ---> image_webcam.js from Andy's GIThub combination
  push();
  translate(windowWidth / 2, windowHeight / 2);
  scale(-1, 1); //mirrors
  image(capture, 0, 0);
  noTint();
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_7.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
}
