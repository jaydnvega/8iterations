let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/HelveticaNeueLTStd-It.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sampleF = 0.05;

  points = myFont.textToPoints('OTF', (width / 3) - 150, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

}

function draw() {
  background("grey");

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    stroke(0, 255, 0, 100); //<--- CHANGE ---> make the colours pop
    strokeWeight(2);
    line(p.x, p.y, mouseX, mouseY);

    let randomDotColor = color(random(255), random(255), random(100));

    fill(randomDotColor); // <--- ADD ---> Strobing effect
    stroke("black");
    strokeWeight(2);

    ellipse(p.x, p.y, 100, 100);
  }
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
    saveCanvas('text_to_point_lines_iteration_5.jpg');
  }
}
