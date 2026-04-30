function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background("pink"); 
}

function draw() {
  background(255, 255, 0, 100);

  if (mouseIsPressed) {
    fill(255, 255, 0);
    stroke(255, 0, 0);
  } else {
    fill(0, 0, 255);
    stroke(0);
  }
  
  strokeWeight(5);
  circle(mouseX, mouseY, 64);
  circle(width * 2, height * 2, 50);
  line(width / 2, height / 2, mouseX, mouseY);  
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_7.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("pink"); 
}
