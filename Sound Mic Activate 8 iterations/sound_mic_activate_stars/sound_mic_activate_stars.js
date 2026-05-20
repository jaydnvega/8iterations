let mic, micLevel, circlecolour;
let amp;
let scale = 5.0;

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
  
  scale = map(micLevel, 0, 1.0, 30, width*5);

  stroke(circlecolour);
  fill(0,random(255),0);
  circle(width/2, height/2, scale);
  
// <--- ADDITION ---> Random stars background
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 30);
        let hue = random(360);
        
        fill(hue, 80, 90);
        noStroke();
        circle(x, y, r);
    }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_4.jpg');
  }
}
