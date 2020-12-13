const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rope;
var ball;


function setup(){
    createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  
  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x:500,y:50});

//    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    background(180);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
   
  ball.display();
  rope.display();
  
  
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


//function mouseReleased(){
  //  slingshot.fly();
   // gameState = "launched";
    
//}

