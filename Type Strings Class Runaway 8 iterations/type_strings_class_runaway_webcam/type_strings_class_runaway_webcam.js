let allWords = [];
let para;
let capture;

function preload() {
  para = loadStrings("data/mcluhan.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);

  let words = para[0].split(' ');

  for (let i = 0; i < words.length; i++) {
    let x = random(width);
    let y = random(height);

    let newWord = new Manifesto(words[i], x, y);
    allWords.push(newWord);
  }
  
  imageMode(CENTER);
  
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  background(0);
  
  // draw webcam
  push();
  translate(width / 2, height / 2);
  image(capture, 0, 0);
  noTint();
  pop();
  
  // optional dark overlay
  fill(0, 120);
  rect(0, 0, width, height);
  
  fill(255);
  
  
  for (let i = 0; i < allWords.length; i++) {
    allWords[i].move();
    allWords[i].display();
  }
}

class Manifesto {
  constructor(wordText, x, y) {
    this.text = wordText;
    this.x = x;
    this.y = y;
  }

  move() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    if (d < 100) {
      if (mouseX < this.x) { this.x += 5; }
      if (mouseX > this.x) { this.x -= 5; }
      if (mouseY < this.y) { this.y += 5; }
      if (mouseY > this.y) { this.y -= 5; }
    } else {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
  }

  display() {
    text(this.text, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('type_strings_class_runaway_iteration_3.jpg');
  }
}
