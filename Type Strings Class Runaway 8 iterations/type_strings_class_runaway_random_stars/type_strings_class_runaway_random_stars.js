let allWords = [];
let para;

function preload() {
  para = loadStrings("data/mcluhan.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  
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
  background(0, 20);
  
    // <--- ADDITION ---> RANDOM STARS BACKGROUND ON TOP OF THE RUNAWAY
      for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(0.2, 6);
        //let hue = random(360);
        
        fill(255);
        noStroke();
        
        circle(x, y, r);
      }
      
  // WORDS
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
    saveCanvas('type_strings_class_runaway_iteration_4.jpg');
  }
}
