function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  background(255, 255, 0); 
}

function draw() {
  let horizontalSpeed = abs(pmouseX - mouseX);
  background(255, 255, 0, 100);


  if (mouseIsPressed) {
    fill(255, 255, 0);
    stroke(255, 0, 0);

  } else {
    fill(0, 0, 255);
    stroke(0);
  }
  
  strokeWeight(5);

  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  circle(x, y, 64);

  circle(width * 2, height * 2, 50);
  line(width / 2, height / 2, x, y);  
   
// <--- ADDITION ---> Adding sphere into the mix
 push();
 translate(220,-40,0);
 stroke(random(255)); // <--- EFFECT ---> GLOW SPINNING BALL
 
 rotateY(frameCount * 0.05);
 rotateX(frameCount * 0.016);
 
 fill(100,255,100);
 sphere(50);
 pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('draw_rays_iteration_4.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
