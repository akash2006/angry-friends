const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var gameState = "start";
var score = 0;
var bg,backgroundImg;
function preload(){
  backgroundImg = loadImage("pics/facebook post.png");
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,630,1200,20);
  me = new me(100,500);

  box1 = new Box(1040,570);
  box2 = new Box(800,570);
  log1 = new Log(920,510,275,20);
  enemy1 = new Enemy1(920,600);

  box3 = new Box(1040,470);
  box4 = new Box(800,470);
  log2 = new Log(920,410,275,20);
  enemy2 = new Enemy2(920,500);

  box5 = new Box(1040,370);
  box6 = new Box(800,370);
  log3 = new Log(920,310,275,20);
  enemy3 = new Enemy3(920,400);

  slingshot = new Slingshot(me.body,{x:185,y:520});

}

function draw() {
 
  background(backgroundImg);  
  Engine.update(engine);
  
  noStroke();
  textSize(34);
  fill("white");
  text("Score : "+score,width-300,50);

  me.display();
  box1.display();
  box2.display();
  log1.display();
  enemy1.display();
  enemy1.score();

  box3.display();
  box4.display();
  log2.display();
  enemy2.display();
  enemy2.score();
  
  box5.display();
  box6.display();
  log3.display();
  enemy3.display();
  enemy3.score();

  slingshot.display();

  
}

function mouseDragged(){
  //if(gameState !== "launched"){
    Matter.Body.setPosition(me.body,{x:mouseX,y:mouseY});
  //}
}
function mouseReleased(){
  gameState === "launched";
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32 && me.body.position.y>550){
    Matter.Body.setPosition(me.body,{x:200,y:550});
    slingshot.attach(me.body);
  }
}

