let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  
   imageMode(CENTER);
   image(capture, width / random(2), 0, width / random(2), height / random(2));      // Top Right
   
   background(255, 255, 0, 6);

  if (mouseIsPressed) {
    fill(255, 0, 0,);
    stroke(255, 0, 0);

  } else {
    fill(255, 0, 255,);
    stroke(0);
  }
  
  strokeWeight(2);
  circle(mouseX, mouseY, 64);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_3.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
