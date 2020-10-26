
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1000,1000);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();

	let options={
		mouse: canvasmouse
	};
	mConstraint= MouseContraint.create(engine,options)
	World.add(world,mConstraint);
	rectMode(CENTER);




	roofObject=new roof(400,50,700,50);

	bobDiameter=40;

	//startBobPositionX=width/2;
	//startBobPositionY=height/4+500;
	bobObject1=new bob(200, 600, 100);
	bobObject2=new bob(301, 600, 100);
	bobObject3=new bob(401, 600, 100);
	bobObject4=new bob(501, 600, 100);
	bobObject5=new bob(601, 600, 100);
	
	
	


	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}



function mouseDragged(){

	Matter.Body.setPosition(bobObject1.body,{x:mouseX, y:mouseY })
}






