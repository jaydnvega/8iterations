function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // <--- ADDITION ---> WEBGL for primitives

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
  
// <--- ADDITION ---> to fix issue with alignment
  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  
  circle(x, y, horizontalSpeed);
  
// <--- ADDITION ---> Primitive Plane - Combination
 push();
 translate(0,120,0);
 rotateX(HALF_PI);
 stroke(20);
 fill("orange");
 plane(700,700);
 pop();
 
// <--- ADDITION ---> Primitive Sphere - Combination
 push();
 translate(220, -20, 0);
 translate(cos(frameCount * 0.02) * 240, -20, sin(frameCount * 0.07) * 240);
 noStroke();
 fill("yellow");
 sphere(20);
 pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_4.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("gray"); // <--- CHANGE --->
}
