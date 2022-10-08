
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20)
lground = new Ground(500,640,15,70)
rground = new Ground(750,640,15,70)
ball=Bodies.circle(20, 200, 10, ball_options) 
World.add(world,ball)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,ball.r,ball.r)
  ground.display()
lground.display()
rground.display()
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,ball.position,{x:15,y:-15})
	}
}


