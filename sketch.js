const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var doctor,rope,ground1;
var bactbacteriaeria1,bacteria2,bacteria3,bacteria4,bacteria4,bacteria5,bacteria6,bacteria7,bacteria8,bacteria9,bacteria10;
var ground2,ground3;

function preload() {
 
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600, 600, 1500, 20);

  doctor= new Doctor(400,200,100);
 doctor.debug = true;
  rope = new Rope(doctor.body, { x: 200, y: 200 });

  bacteria1 = new Bacteria(520, 380, 30);
  bacteria2 = new Bacteria(560, 380, 30);
  ground2 = new Ground(600,400,200,10);
  bacteria3 = new Bacteria(600, 380, 30);
  bacteria4 = new Bacteria(640, 380, 30);
  bacteria5 = new Bacteria(680,380,30);
  
  ground3 = new Ground(800,300,200,10);
  bacteria6 = new Bacteria(720,280,30);
  bacteria7 = new Bacteria(760,280,30);
  bacteria8 = new Bacteria(800,280,30);
  bacteria9 = new Bacteria(840,280,30);
  bacteria10 = new Bacteria(880,280,30);
  
  


}

function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();

  bacteria1.display();
  bacteria2.display();
  bacteria3.display();
  bacteria4.display();
  bacteria5.display();
  bacteria6.display();
  bacteria7.display();
  bacteria8.display();
  bacteria9.display();
  bacteria10.display();


  doctor.display();
  rope.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(doctor.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
 if(keyCode === 32 ){
   rope.attach(doctor.body);
 }
}