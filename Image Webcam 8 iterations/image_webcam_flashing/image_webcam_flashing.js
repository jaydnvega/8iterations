let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(255,255, 0, 6);

  push();
  translate(width / 2, height / 2);
  scale(-1, 1);

  image(capture, 0, 0);

  pop();

  imageMode(CORNER);
  image(capture, width / 2, 0, width / 2, height / 2);      // Top Right
  image(capture, 0, height / 2, width / 2, height / 2);      // Bottom Left
   
// <--- ADDITION ---> Flashy lights with rays and fade
    if (mouseIsPressed) {
    fill(255, 255, 0);
    stroke(255, 0, 0);
    background(random(255), random(255), random(255)); 
  } else {
    fill(0, 0, 255);
    stroke(0);
  }
  
  strokeWeight(2);
  //circle(mouseX, mouseY, 64);
  circle(width / 2, height / 2, 24);
  line(width / 2, height / 2, mouseX, mouseY);  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_1.jpg');
  }
}
