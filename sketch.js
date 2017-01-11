var xspacing = 2;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 4;   // total # of waves to add together
var theta = 0.0;
var amplitude = new Array(maxwaves);
var dx = new Array(maxwaves);
var yvalues;


var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var g = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);

  frameRate(30);
  w = height;
  for (var i = 0; i < maxwaves; i++) {
    amplitude[i] = 20;
    var period = random(100,300); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);

  drawWave(400, 4, 0, -800, 50, 255, 255);
  // drawWave(200, PI, -width/2-50, -c, 255, 50, 255);
  // drawWave(500, 5, -100, -700, 100, 50, 255);
  // drawWave(500, 8, 0, -500, 255, 50, 100);
  if(frameCount > 450){
    push();
    g+=1.5;
    translate(width/1.5+g, height/2+50-g);
    rotate(TWO_PI/3);
    calcWave();
    renderWaveR(100, 255, 50);
    pop();
  }

  if(frameCount > 300){
    push();
    f+=1;
    translate(width/2+50-f,-50);
    rotate(0);
    calcWave();
    renderWaveR(255, 100, 50);
    pop();
  }


  if(frameCount > 500){
    e+=1.5;
    push();
    translate(width*1.5-e, -height/2-50+e);
    rotate(TWO_PI/3);
    calcWave();
    renderWave(255, 50, 100);
    pop();
  }


  if(frameCount > 200){
    b+=1
    push();
    translate(-width/2-50+b, 0);
    calcWave();
    renderWave(255, 50, 255);
    pop();
  }

  push();
  a+=1;
  translate(width/1.2, -height+a);
  rotate(PI/2);
  calcWave();
  renderWave(255, 255, 50);
  pop();

  if(frameCount > 100 && frameCount < 200 && frameCount % 10 == 0) {
    push();
    a+=1;
    translate(width/1.205, -height+a);
    rotate(PI/2);
    calcWave();
    renderWave(255, 50, 255);
    pop();
  }

  if(frameCount > 250 && frameCount < 350 && frameCount % 10 == 0) {
    push();
    a+=1;
    translate(width/1.195, -height+a);
    rotate(PI/2);
    calcWave();
    renderWave(255, 100, 50);
    pop();


  }

function drawWave(sec, ang, t1, t2, r, g, b ) {
  if(frameCount > sec) {
    push();
    c+=1.5;
    translate(t1+c, t2+c);
    rotate(PI/ang);
    calcWave();
    renderWave(r, g, b);
    pop();

  }

}


}

function calcWave() {

  theta += 0.02;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }

  // Accumulate wave height values
  for (var j = 0; j < maxwaves; j++) {
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}


function renderWave(r, g, b) {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(r, g, b,100);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing,width/3+yvalues[x],10,10);
  }
}

function renderWaveR(r, g, b) {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(r, g, b,100);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(width-x*xspacing,width/3+yvalues[x],10,10);
  }
}
