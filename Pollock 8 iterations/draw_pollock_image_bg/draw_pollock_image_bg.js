// <--- ADDITION ---> Image Basics iteration - Preload function

function preload() {
 bgImage = loadImage("data/Barry_been_benson.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // <--- ADDITION ---> Image Basics iteration
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);
}

function draw() {

  let horizontalSpeed = abs(pmouseX - mouseX);

  if (mouseIsPressed) {
    fill(pmouseY / 4, pmouseX / 4, (pmouseX + pmouseY) / 4);
  } else {
    fill(mouseY / 2, mouseX / 2, (mouseX + mouseY) / 2);
  }

  noStroke();

  circle(mouseX, mouseY, horizontalSpeed);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pollock_iteration_2.jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER); // <---CHANGE---> to be the same as the background image
}
