let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf"); // <--- CHANGE WILL HAPPEN THROUGHOUT ---> font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sampleF = 0.05;
  points = myFont.textToPoints('THICK', (width / 4) - 200, height / 2, 300, { // <--- CHANGE WILL HAPPEN THROUGHOUT ---> word
  sampleFactor: sampleF,
  simplifyThreshold: 0
  });

}

function draw() {
  background("pink"); // <--- CHANGE ---> Colour

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    stroke(255, 255, 255, 100);
    strokeWeight(random(5)); // <--- CHANGE ---> random
    line(p.x, p.y, mouseX, mouseY);

    let randomDotColor = color(random(255), random(255), random(255));

    fill(randomDotColor);
    stroke("black");
    strokeWeight(5);

    ellipse(p.x, p.y, -50, 100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = myFont.textToPoints('FONTS', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_lines_iteration_1.jpg');
  }
}
