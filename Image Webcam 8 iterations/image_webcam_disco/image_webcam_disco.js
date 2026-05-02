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
  translate(mouseX, mouseY); // <--- CHANGE ---> Fixing so follows mouse

  image(capture, 0, 0);
  noTint();

  pop();
  
// <--- ADDITION ---> DISCO DISCO DISCO
    if (mouseIsPressed) {
    fill(255, 255, 0);
    stroke(255, 0, 0);
    background(random(255), random(255), random(255), 60); 
  } else {
    fill(0, 0, 255);
    stroke(0);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_5.jpg');
  }
}
