let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf");
  bgImage = loadImage("data/grinch_man.jpg"); // <--- ADDITION ---> Image
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.05;
  
  image(bgImage, 240, 180, width, height, 220, 240, bgImage.width, bgImage.height, COVER);

  points = myFont.textToPoints('BOOM', (width / 4) - 50, height / 2, 100, { // <--- CHANGE ---> smaller
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

}

function draw() {
  //background("green");

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    stroke(255, 255, 255, 100);
    strokeWeight(1);
    line(p.x, p.y, mouseX, mouseY);

    let randomDotColor = color(random(0), random(255), random(100));

    fill(randomDotColor);
    stroke("gray");
    strokeWeight(3);

    ellipse(p.x, p.y, 10, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints('BOOM', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_lines_iteration_3.jpg');
  }
}
