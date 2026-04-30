function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 0, 90); 

}

function draw() {
  background(10, 10, 10, 20);
  
  if (mouseIsPressed) {
    fill(255, 255, 0);
    stroke(255, 0, 0);
    background(random(255), random(255), random(255)); // <--- CHANGE ---> Make the background flashy... literally
  } else {

    fill(50, 255, 50); 
    stroke(0);
  }
  
  strokeWeight(2);
  circle(mouseX, mouseY, 80);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_6_.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
