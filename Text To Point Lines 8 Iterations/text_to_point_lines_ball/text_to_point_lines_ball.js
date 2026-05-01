let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.05;

  points = myFont.textToPoints('BALL', (width / 4) - 200, height / 2, 300, {
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
    
    fill("black");
    circle(mouseX, mouseY, 500, 500);

    let randomDotColor = color(random(255), random(255), random(255));

    fill(randomDotColor);
    stroke("white");
    strokeWeight(1);

    ellipse(p.x, p.y, 10, 10);
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints('BALL', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_lines_iteration_8.jpg');
  }
}
