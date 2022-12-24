
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1
var body2
var body3
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1400,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	body1=new Ground(700,495,1400,10);
	body2=new Ground(1000,450,10,100)
	body3=new Ground(1150,450,10,100)
	//when we write thsi line control goes to the constuctor of the ground class in ground.js
	ball=Bodies.circle(500,50,20)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  body1.show()
  body2.show()
  body3.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 20,20)
  drawSprites();
 
  if(keyIsDown(UP_ARROW)){
    console.log("working")
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.018,y:-0.02})
    
  }


}



