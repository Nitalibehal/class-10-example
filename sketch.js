
function preload(){
seaimage = loadImage("sea.png");
shipimage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,500);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running",shipimage1);
  sea.addImage(seaimage);
  edges = createEdgeSprites();
  ship.scale = 0.7;
  ship.x = 50;
}

function draw() {
  background("light blue");

  drawSprites();

  if (sea.x <0){
    sea.x = sea.width/2;
  }
}