const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var wall;

var pushButton;
var rightButton;
var upButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ballOptions = {
    restitution: 1
  }
  
 ball = Bodies.circle(200,200,20,ballOptions);
 World.add(world,ball);

  pushButton = createImg("push.png");
  pushButton.position(25,25);
  pushButton.size(50,50);
  pushButton.mouseClicked(pushForce);

  rightButton = createImg("right.png");
  rightButton.position(100,25);
  rightButton.size(50,50);
  rightButton.mouseClicked(rightForce);


  upButton = createImg("up.png");
  upButton.position(175,25);
  upButton.size(50,50);
  upButton.mouseClicked(upForce);

  var wallOptions ={
    isStatic: true
  }

  wall = Bodies.rectangle(200,200,200,5,wallOptions);
  World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);

  rect(wall.position.x,wall.position.y,200,5);
}

function rightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
}

function upForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});
}

function pushForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:-0.01});
}

