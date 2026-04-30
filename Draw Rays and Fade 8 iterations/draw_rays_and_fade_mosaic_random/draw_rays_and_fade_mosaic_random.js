let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {

  background(255, 255, 0, 6);

// <--- CHANGE ---> irregular mosaic
   imageMode(CORNER);
   image(capture, 0, 0, width / 2, height / 2, 300);              // Top Left
   image(capture, width / 2, 0, width / 2, height / 2, 200);      // Top Right
   image(capture, 0, height / 2, width / 2, height / 2, 100);      // Bottom Left
   image(capture, width / 2, height / 2, width / 2, height / 2, 400); // Bottom Right
   background(255, 255, 0, 6);

  if (mouseIsPressed) {
    fill(0, 255, 0);
    stroke(255, 0, 0);
    
  } else {
    fill(0, 0, 255);
    stroke(0);
  }
  
  strokeWeight(2);

  circle(mouseX, mouseY, 64);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_2.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0, 6);
}
