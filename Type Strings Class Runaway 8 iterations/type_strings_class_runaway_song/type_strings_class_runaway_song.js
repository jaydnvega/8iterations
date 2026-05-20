let allWords = [];
let para;
let song;
let analyzer, volume, fontsize;

function preload() {
  para = loadStrings("data/mcluhan.txt");
   song = loadSound("data/House_of_the_rising_sun.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Click to start / pause audio', width / 2, height / 2);

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
  
   if (song.isPlaying()) {
    background(0, 255, 0, 4)
  volume = analyzer.getLevel();  //<~~~only for viz
  let fontsize = map(volume,0,1,124,600);
  textSize(fontsize);
  text("House of the rising sun", width/2, height/2);
  }
  else {textSize(124);}


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
// <--- ADDITION ---> FOR SONG TO PLAY
function mousePressed() {
  if (getAudioContext.state!=='running') {
    userStartAudio();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song); }

  if (song.isPlaying()) {
    song.pause();
    background(255, 0, 0);
    fill(255);
    textSize(124);
    text('Paused - click to resume', width/2, height/2);
  } else {
    song.loop();
    background(0, 255, 0);
    fill(255);
    textSize(124);
    text('Playing - click to pause', width / 2, height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('type_strings_class_runaway_iteration_8.jpg');
  }
}
