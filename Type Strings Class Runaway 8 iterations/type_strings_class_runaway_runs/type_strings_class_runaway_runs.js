let allWords = [];
let para;

function preload() {

  para = loadStrings("data/mcluhan.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(random(255));
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
  background(0);

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
      if (mouseX < this.x) { this.x += 50; } // <--- CHANGE ---> QUICK
      if (mouseX > this.x) { this.x -= 50; } // <--- CHANGE ---> QUICK
      if (mouseY < this.y) { this.y += 50; } // <--- CHANGE ---> QUICK
      if (mouseY > this.y) { this.y -= 50; } // <--- CHANGE ---> QUICK
    } else {
      this.x += random(-10, 1); // RUNAWAY CORNER <--- CHANGE --->
      this.y += random(-1, 10); // RUNAWAY CORNER <--- CHANGE --->
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
    saveCanvas('type_strings_class_runaway_iteration_2.jpg');
  }
}
