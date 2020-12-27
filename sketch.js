
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, tree
var mango1,mango2,mango3

function preload()
{
	boyImg = addImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();

	stone = new Stone (boy.x = stone.x, boy.y = stone.y);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);


  mango1.display();
  mango2.display();
  mango3.display();
  
  drawSprites();
}


function mouseDragged(){
	Matter.Body.setPosition(mango1.body || mango2.body || mango3.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
stone.fly();

}


function keyPressed(){
	if(keyCode ===32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
	}
}


function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.Position
	stoneBodyPosition = stone.body.Position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= mango.r+1stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

