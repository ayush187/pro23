
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,bodies
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  var circleDiameter=10*4
	//Create the Bodies Here.
  circle1=new Ball(230,250)
  circle2=new Ball(250,250)
  circle3=new Ball(270,250)
  circle4 = new Ball(290,250)
  circle5=new Ball(310,250)
  upper1=new Upper(270,150)
/*  rope1=new Rope(circle1.body,upper1.body,-circleDiameter*2,0)
  rope2=new Rope(circle2.body,upper1.body,-circleDiameter*2,0)
  rope3=new Rope(circle3.body,upper1.body,-circleDiameter*2,0)
  rope4=new Rope(circle4.body,upper1.body,-circleDiameter*2,0)
  rope5=new Rope(circle5.body,upper1.body,-circleDiameter*2,0)*/
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  //();
 circle1.display();
 circle2.display();
 circle3.display();
 circle4.display();
 circle5.display();
 upper1.display();
}



