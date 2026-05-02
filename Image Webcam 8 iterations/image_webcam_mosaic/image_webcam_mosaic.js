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
  translate(width / 2, height / 2);
  scale(-1, 1);

  image(capture, 0, 0);

  pop();

// <--- CHANGE ---> Full Mosaic with Filtering
   imageMode(CORNER);
   image(capture, 0, 0, width / 2, height / 2);              // Top Left
   image(capture, width / 2, 0, width / 2, height / 2);      // Top Right
   image(capture, 0, height / 2, width / 2, height / 2);      // Bottom Left
   image(capture, width / 2, height / 2, width / 2, height / 2); // Bottom Right
   filter(THRESHOLD);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_4.jpg');
  }
}
