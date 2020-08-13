let colors = [255, 100, 0, 300, 50, 200];
let index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  fill(100, 100, colors[index]);
  rect(200, 200, 350, 350);
}

function mousePressed(){
  index ++;
  if(index == colors.length){
    index = 0;
  }
  print(index);
}