function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background(255, 255, 0); 
}

function draw() {

  background(255, 255, 0, 6);

  if (mouseIsPressed) {

    fill(255, 255, 0);
    noStroke();
  } else {
    fill(0, 0, 255);
    stroke(0.02);
  }
  
  strokeWeight(2);
  
  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  
  push();
    translate(0, -40, 0);
    stroke(random(255));
    strokeWeight(4);
    
    rotateY(x * 0.4);
    rotateX(y * 0.2);

    fill(88, 201, 255);
    box(x, y, 180);
  pop();
}


function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_8.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
