// <--- ADDITION ---> WEBCAM COMBINATION ITERATION
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {

// <--- ADDITION ---> Half of Mosaic
   imageMode(CORNER);
   image(capture, 0, 0, width / 2, height / 2);                  // Top Left
   image(capture, width / 2, height / 2, width / 2, height / 2); // Bottom Right
   filter(INVERT);
   
   background(255, 255, 0, 6);

// <--- CHANGE ---> paddleball look
  if (mouseIsPressed) {
    fill(255, 0, 0,);
    stroke(255, 0, 0);
    
  } else {
    fill(255, 0, 255,);
    stroke(0);
  }
  
  strokeWeight(2);

  circle(mouseX, mouseY, 64);
  circle(width / 2, height / 2, 24);
  line(width / 2, height / 2, mouseX, mouseY);  
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_1.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0, 6);
}
