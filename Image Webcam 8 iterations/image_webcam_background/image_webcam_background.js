let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(0);

  push();

  translate(width / 2, height / 2);
  image(capture, 0, 0);

  noTint();

  pop();

// <--- ADDITION ---> Background with a smaller webcam
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 6);
        let hue = random(360);
        
        fill(hue, 80, 90);
        noStroke();
        circle(x, y, r);
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('image_webcam_iteration_7.jpg');
  }
}
