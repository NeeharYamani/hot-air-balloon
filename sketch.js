var balloon1;


function preload(){
  bg = loadImage("images/balloon1.png");
  balloonImage2 = loadImage("images/balloon2.png");
  balloonImage3 = loadImage("images/balloon3.png");
  balloonImage4 = loadImage("images/balloon4.png");
  hotairballoon = loadAnimation("images/balloon2.png","images/balloon3.png","images/balloon4.png");
}

function setup() {
  createCanvas(800,400);
  
  balloon1 = createSprite(200,200,50,50);
  balloon1.addAnimation("hotairballoon",hotairballoon);
  balloon1.scale = 0.5;
  
}

function draw() {
  background(bg);  
  if(keyDown(UP_ARROW)){
    balloon1.y = balloon1.y-1;
   
  }
  if(keyDown(DOWN_ARROW)){
    balloon1.y = balloon1.y+1;
   
  }
  if(keyDown(LEFT_ARROW)){
    balloon1.x = balloon1.x-1;
   
  }
  if(keyDown(LEFT_ARROW)){
    balloon1.x = balloon1.x-1;
   
  }
  if(keyDown(RIGHT_ARROW)){
    balloon1.x = balloon1.x+1;
   
  }
  
  
  drawSprites();
  fill("black")
  textSize(20);
  text("*Use Arrow Keys To Move The Hot Air Balloon",30,30);
}