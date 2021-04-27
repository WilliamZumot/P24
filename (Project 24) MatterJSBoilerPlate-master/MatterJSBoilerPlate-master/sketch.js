
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wallB = new Dustbin(500, 450, 100, 10);
	wallL = new Dustbin(450, 400, 10, 100);
	wallR = new Dustbin(550, 400, 10, 100);
	paper = new Paper(100, 400, 30);
	ground = new Ground(400, 470, 850, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  wallB.display();
  wallL.display();
  wallR.display();
  ground.display();

  
  drawSprites(); 
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:120, y:-120});
	}
}

