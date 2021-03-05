
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var tree1,ground,stone,boyImg,boy,mango1,mango2,mango3,mango4,mango5,mango6,sling;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	tree1=new Tree(600,450,400,400);
	ground=new Ground(400,650,800,20);
	boy=new Boy(100,100);
	stone=new Stone(155,545,50);
	mango1=new Mango(550,350);
	mango2=new Mango(600,400);
	mango3=new Mango(650,400);
	mango4=new Mango(630,350);
	mango5=new Mango(550,400);
	mango6=new Mango(580,380);
	sling=new Sling(stone.body,{x:155,y:545});
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  drawSprites();
  boy.display();
  tree1.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  sling.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position
	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.isStatic(Lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		sling.attach(stone.body);
	}
}