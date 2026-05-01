let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-It.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // <--- ADDITION ---> PRIMITIVE

  points = myFont.textToPoints('THICK', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0

  });

}

function draw() {
  background(0,255,0);
  
  let x = (mouseX - width / 2);
  let y = (mouseY - height / 2);
  
    push();
    translate(0, 0, 0);
    stroke(random(255));
    strokeWeight(4);
    
    rotateY(x * 0.4);
    rotateX(y * 0.2);

    fill(88, 201, 255);
    box(x, y, 180);
  pop();
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    stroke(255, 255, 255, 200);
    strokeWeight(9);
    line(p.x, p.y, mouseX, mouseY);

    let randomDotColor = color(random(255), random(255), random(255));

    fill(250);
    stroke("black");
    strokeWeight(5);
    circle(width/2, height/2, scale);

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
    saveCanvas('text_to_point_lines_iteration_6.jpg');
  }
}
