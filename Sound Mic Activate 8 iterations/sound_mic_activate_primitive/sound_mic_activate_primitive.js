let mic, micLevel, boxColour; // <--- CHANGE ---> for primitive box change
let amp;
let scale = 5.0;

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
  getAudioContext().suspend();
  background(255,255,0);

  mic = new p5.AudioIn();
  mic.start();
  //micLevel = mic.getLevel();

  textSize(24);
  textAlign(CENTER, CENTER);
  text("Click anywhere to start", 200, 200);
}

function mousePressed(){
userStartAudio();
}

function draw() {
  micLevel = mic.getLevel();
  
  // background reacts to mic <--- ADDITION--->
  boxColour = int(255 - micLevel * 255);
  background(boxColour,boxColour, 0, 40);
  
  // map mic level to box size
  let size = map(micLevel, 0, 1.0, 50, 300);
  
  // center is already (0,0) in WEBGL
  rotateX(micLevel * 5); //subtle rotation
  rotateY(frameCount * 0.02);
  
  //scale = map(micLevel, 0, 1.0, 50, 500);

  stroke(boxColour);
  fill(0, random(255), 0);
  
  box(size, size * 0.5, size * 2); // <-- 3D BOX reacting to mic
  
  lights();

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sound_mic_activate_iteration_7.jpg');
  }
}
