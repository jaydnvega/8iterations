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
  translate(width / random(10), height / random(20)); // <--- CHANGE ---> JITTER EFFECT

  image(capture, 0, 0); 
  image(capture, 0, 0, width, height, 0, 0, capture.width, capture.height, COVER); // <--- ADDITION ---> 
  pop();

  filter(POSTERIZE, 10);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_6.jpg');
  }
}
