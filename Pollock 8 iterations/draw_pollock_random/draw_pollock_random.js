function setup() {
  createCanvas(windowWidth, windowHeight);

  background("black");
}

function draw() {
  let horizontalSpeed = abs(pmouseX - mouseX);

  if (mouseIsPressed) {
    fill(pmouseY / 4, pmouseX / 4, (pmouseX + pmouseY) / 4);
  } else {
    fill(mouseY / 2, mouseX / 2, (mouseX + mouseY) / 2);
  }

// <--- ADDITION ---> Random() function to most aspects
  stroke(mouseX / 2, mouseY / 2, (mouseX + mouseY) / 2);
  strokeWeight(random(20)); // <--- CHANGE ---> random() function
  fill(random(255)); // <--- CHANGE ---> Colour
  circle(mouseX, mouseY, horizontalSpeed);

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_8.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("black");
}
