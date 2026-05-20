let allWords = [];
let para;
let bgImage;
let backgroundOpacity;
let backgroundFadeDirection;
let img, imgXoffset;

let counter = 0;

function preload() {
  para = loadStrings("data/mcluhan.txt");
  bgImage = loadImage("data/DSC8113_sketch_CC.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  
  noStroke();
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);

  let words = para[0].split(' ');

  for (let i = 0; i < words.length; i++) {
    let x = random(width);
    let y = random(height);

    let newWord = new Manifesto(words[i], x, y);
    allWords.push(newWord);
  }
}

function draw() {
  // WORDS
  fill(random(255)); // <--- CHANGE ---> MAKE IT STROBE THE WORDS
    //fill(50);

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
    saveCanvas('type_strings_class_runaway_iteration_7.jpg');
  }
}
