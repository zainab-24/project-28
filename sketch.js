
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var land
var rock
var boy,boyImage
var bigTree
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var rope1

function preload(){
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1275, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	land = new Ground(width/2,height-45,width,20)
	rock = new Stone(247,430,50,50)
	bigTree = new Tree(width-200,height-265,350,450)
	mango1 = new Mango(980,270,50,75)
    mango2 = new Mango(1100,285,45,70)
	mango3 = new Mango(1090,190,65,90)
	mango4 = new Mango(1157,285,55,80)
	mango5 = new Mango(1025,200,40,65)
	mango6 = new Mango(1045,260,60,85)
	mango7 = new Mango(1170,225,55,80)
	mango8 = new Mango(1200,245,35,60)
	mango9 = new Mango(1120,240,40,65)
	rope1 = new Rope(rock.body,{x:247,y:430})
	
	Engine.run(engine);
	boy = createSprite(300,485,1,1)
	boy.addImage("a",boyImage)
	boy.scale = 0.1  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites(); 
  land.display()
  bigTree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  rope1.display()
  rock.display()
  //if (isTouching()){
  //Matter.Body.setStatic(mango,false)
  //}
  detectCollision(rock,mango1)
  detectCollision(rock,mango2)
  detectCollision(rock,mango3)
  detectCollision(rock,mango4)
  detectCollision(rock,mango5)
  detectCollision(rock,mango6)
  detectCollision(rock,mango7)
  detectCollision(rock,mango8)
  detectCollision(rock,mango9)
}
function mouseDragged(){
Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
rope1.fly()
}
function detectCollision(lrock,lmango){
mangoBodyPosition = lmango.body.position
rockBodyPosition = lrock.body.position

var distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,rockBodyPosition.x,rockBodyPosition.y)
if (distance<=lmango.r + lrock.width/2){
Matter.Body.setStatic(lmango.body,false)
}
}
function keyPressed(){
  if (keyCode == 32){
    Matter.Body.setPosition(rock.body,{x:247,y:430})
    rope1.attach(rock.body)
  }
}