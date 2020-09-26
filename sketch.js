var tower,towerImg;
function preload(){
 towerImg = loadImage("tower.png");
 ghostStImg = loadImage("ghost-standing.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
}

function setup(){
 createCanvas(600,600);
    tower = createSprite(300,300,50,50);
  tower.addImage(towerImg);
  ghost = createSprite(300,300,20,20);
  ghost.addImage(ghostStImg);
  ghost.scale = 0.3;
}
function draw(){
  tower.velocityY = 1;
  if(tower.y > 450){
    tower.y = 300;
    }  
  if(keyDown("space")){
     ghost.velocityY = -15;
     }
  if(keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x +5;
  }
    if(keyDown(LEFT_ARROW)){
    ghost.x = ghost.x -5;
  }
  ghost.velocityY = ghost.velocityY + 1;
  spawnDoor();

  drawSprites();
}
function spawnDoor(){
if(frameCount % 200 === 0){
    door = createSprite(200,200,20,20);
    climber = createSprite(200,250,20,20);
  climber.addImage(climberImg);
  climber.velocityY = 1;
  door.velocityY = 1;
      door.depth = ghost.depth
  ghost.depth =  ghost.depth +1;
    door.addImage(doorImg);
  door.x = Math.round(random(120,480));
    climber.x = door.x;

  
}
}