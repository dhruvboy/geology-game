const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron= new Iron(400,400,120,80)
  stone= new Stone(900,200,75,75,50)
rubber= new Rubber(600,50,100,100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   iron.display();
    stone.display()
 rubber.display()
}