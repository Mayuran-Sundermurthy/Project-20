var astronaut;
var bathAni;
var brushImg;
var drinkAni;
var eatAni;
var gymAni1, gymAni2;
var iss, backgroundImg;
var moveAni, move;
var sleepImg; 

function preload(){
  bathAni = loadAnimation('bath1.png','bath2.png');

  brushImg = loadImage('brush.png');

  drinkAni = loadAnimation('drink1.png', 'drink2.png');

  eatAni = loadAnimation('eat1.png', 'eat2.png');

  gymAni1 = loadAnimation('gym1.png', 'gym2.png');
  gymAni2 = loadAnimation('gym11.png', 'gym12.png');

  moveAni = loadAnimation('move.png', 'move1.png');

  backgroundImg = loadImage('iss.png');

  Astronaut = loadImage('sleep.png');
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 10, 10);
  iss.addImage(backgroundImg);
  iss.scale = 0.2;

  astronaut = createSprite(400,200,10,10);
  astronaut.addAnimation("sleeping",Astronaut);
  astronaut.addAnimation("moving",moveAni);
  astronaut.scale = 0.1;
  console.log(astronaut.x);

  
}

function draw() {
  background(30);

  if(keyDown('m')){
    
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}