var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
function preload() 
{

}
var ground2,bobobject1,rope2,bobobject2,bobobject3,bobobject4,bobobject5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobobject1 = new Bob (700,600,40);
	bobobject2 = new Bob (650,600,40);
	bobobject3 = new Bob (600,600,40);
	bobobject4 = new Bob (550,600,40);
	bobobject5 = new Bob (500,600,40); 
	ground2 = new Ground (600,100,1200,20);
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  line(600,100,600,600)	;
  line(700,100,700,600);
  line(650,100,650,600);
  line(500,100,500,600);
  line(550,100,550,600);
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  ground2.display();
  rope2.display();
  drawSprites();
 
}



