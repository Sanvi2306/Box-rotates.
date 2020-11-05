const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ground;
var box1, box2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic: true
  }
 ground= Bodies.rectangle(400,350, 800,30,ground_options);
 World.add(world,ground);
console.log(ground.position.x, ground.position.y);


box1 = new Box(510,200,80,50);
box2=new Box(540,50,90,60);x
Engine.run(engine);
}

function draw() {
  background(255,255,0);  
  fill("brown");                          
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,30);

box1.display();
box2.display();

}