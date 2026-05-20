let mic, micLevel, circlecolour;
let amp;
let scale = 5.0;
let words = ("sound", "noise", "voice", "echo", "wave", "mic", "vibe", "beat");

function setup() {
createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  background(255,255,0);

  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();

  textSize(48);
  textAlign(CENTER, CENTER);
  text("Click anywhere to start",width/2,height/2+100);
}

function mousePressed(){
userStartAudio();
}

function draw() {
  micLevel = mic.getLevel();
  circlecolour=int(255-micLevel*255);
  background(circlecolour,circlecolour,0, 5);
  noStroke();
  
  scale = map(micLevel, 0, 1.0, 30, 200);
  textSize(scale); // <--- ADDITION ---> GETTING WORDS TO WORK
  
 // <--- ADDITION ---> GETTING WORDS TO WORK
  let randomWord = random(words);
  let x = random(width);
  let y = random(height);

 // <--- ADDITION ---> GETTING WORDS TO WORK
  noStroke();
  fill(0,random(255),0);
  text(randomWord, x, y);
  
// <--- ADDITION ---> RANDOM WORDS, help with AI in screenshots section
    for (let i = 0; i < 5; i++) {
        let starWord = random(words);
        let x = random(width);
        let y = random(height);
        
        fill(random(255), random(255), 0);
        textSize(random(10, 30));
        text(starWord, x, y);
    }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_5.jpg');
  }
}
