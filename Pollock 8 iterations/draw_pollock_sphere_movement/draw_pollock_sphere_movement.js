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
  
// <--- ADDITION ---> to fix issue with alignment
  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  
  circle(x, y, horizontalSpeed);

// <--- ADDITION ---> Primitive Sphere - Combination
 push();
 translate(220, -20, 0);
 translate(cos(frameCount * 0.02) * 240, -20, sin(frameCount * 0.07) * 240);
 
 stroke(20);
 fill("orange");
 sphere(20);
 pop();
 
 push();
 translate(-220, -20, 200);
 translate(cos(frameCount * 0.02) * 120, -20, sin(frameCount * 0.5) * 120);
 
 stroke(20);
 fill("orange");
 sphere(20);
 pop();
}


function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_3.jpg');
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("gray"); // <--- CHANGE --->
}
