function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background("gray"); // <--- CHANGE --->
}

function draw() {

  let horizontalSpeed = abs(pmouseX - mouseX);

  if (mouseIsPressed) {
    fill(pmouseY / 4, pmouseX / 4, (pmouseX + pmouseY) / 4);
  } else {
    fill(mouseY / 2, mouseX / 2, (mouseX + mouseY) / 2);
  }

  noStroke();
  
  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  
  circle(x, y, horizontalSpeed);

// <--- ADDITION ---> Primitive Box - Combination
 push();
 stroke(12);
 
 rotateY(frameCount * 0.05);
 rotateX(frameCount * 0.016);
 
 fill(10,255,100);
 box(180);
 pop();
 
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_1.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("gray"); // <--- CHANGE --->
}
