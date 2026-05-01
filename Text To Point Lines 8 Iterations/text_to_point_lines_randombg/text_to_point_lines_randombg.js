let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.05;

  points = myFont.textToPoints('diamonds', (width / 4) - 200, height / 2, 300, {
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
    stroke("white");
    strokeWeight(1);

    ellipse(p.x, p.y, 10, 10);
    
// <--- ADDITION ---> RANDOM SCATTERED BACKGROUND
       for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(0.2, 6);
        let hue = random(360);
        
        fill(hue, 80, 90);
        noStroke();
        circle(x, y, r);
    }
    
    background(0, 0, 0, 0.5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints('diamonds', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_lines_iteration_7.jpg');
  }
}
