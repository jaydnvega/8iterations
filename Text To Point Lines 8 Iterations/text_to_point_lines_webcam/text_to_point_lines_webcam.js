let myFont;
let points;
let sampleF;
// <--- ADDITION ---> image_webcam.js from Andy's GIThub combination
let capture;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sampleF = 0.05;
  imageMode(CENTER);
  capture = createCapture(VIDEO);
  capture.hide();
  points = myFont.textToPoints('gengar', (width / 6) - 200, height / 6, 300, {
  sampleFactor: sampleF,
  simplifyThreshold: 0
  });
}

function draw() {
  background("blue");
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    line(p.x, p.y, mouseX, mouseY);
    let randomDotColor = color(random(255), random(255), random(255));
    fill(randomDotColor);
    stroke("gray");
    strokeWeight(3);

    ellipse(p.x, p.y, 10, 10);

  }
      
// <--- ADDITION ---> image_webcam.js from Andy's GIThub combination
  push();
  translate(width / 2, height / 2);
  scale(-1, 1); //mirrors
  image(capture, 0, 0);
  noTint();
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = myFont.textToPoints('gengar', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_lines_iteration_2.jpg');
  }
}
