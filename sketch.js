const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;



var ball;



function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 1600, 20);
  right = new Ground(850, 330, 20, 100);
  left = new Ground(650, 330, 20, 100);


  var ball_options = {
    isStatic:false,
    resitution: 0.3,
    friction: 0,
    density:1.2
  }

  ball = Bodies.circle(200, 200, 25, ball_options);
  World.add(world, ball);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:100, y:-100})
  }
}
function draw() {
  background(51);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 25, 25);
}



