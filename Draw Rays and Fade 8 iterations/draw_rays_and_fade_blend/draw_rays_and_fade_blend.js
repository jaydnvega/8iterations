function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 0); 
}

function draw() {
  background(255, 255, 0, 20);

  if (mouseIsPressed) {
    fill(255, 255, 0); // Yellow fill
    noStroke();

  } else {
    fill(0, 0, 255);
    stroke(0.02); // <--- CHANGE ---> distinguishable when disguised for background
  }
  strokeWeight(20); // <--- CHANGE ---> basic weight change
  circle(mouseX, mouseY, 64);

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_5.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
