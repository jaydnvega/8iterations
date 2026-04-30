function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black"); // Black background
}

function draw() {
  let horizontalSpeed = abs(pmouseX - mouseX);
  let verticalSpeed = abs(pmouseY - mouseY);

  if (mouseIsPressed) {
    fill(pmouseY / 4, pmouseX / 4, (pmouseX + pmouseY) / 4);
  } else {
    fill(mouseY / 2, mouseX / 2, (mouseX + mouseY) / 2);
  }

  stroke(255); // <--- CHANGE ---> Added Stroke
  strokeWeight(30); // <--- CHANGE ---> Heavier Lining

  square(mouseX, mouseY, horizontalSpeed); // <--- CHANGE ---> Circle to Square

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_6.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("black"); // Black background
}
