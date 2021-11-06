const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundObj;
var standObj;
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10;
var block11,block12;
var block13;
var standObj2;
var block14,block15,block16,block17,block18,block19;
var block20,block21,block22,block23;
var block24,block25;
var block26;
var polygon_img;polygon;
var slingshot;



function preload() {
polygon_img= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    groundObj= new Ground(600,570,1200,20);
    standObj= new Ground(390,450,250,15);
    block1= new Box(315,400,30,40);
    block2= new Box(345,400,30,40);
    block3= new Box(375,400,30,40);
    block4= new Box(405,400,30,40);
    block5= new Box(435,400,30,40);
    block6= new Box(465,400,30,40);
    
    block7= new Box(345,360,30,40);
    block8= new Box(375,360,30,40);
    block9= new Box(405,360,30,40);
    block10= new Box(435,360,30,40);

    block11= new Box(375,320,30,40);
    block12= new Box(405,320,30,40);
    
    block13= new Box(390,280,30,40);

    standObj2= new Ground(830,300,250,15);
    block14= new Box(750,250,30,40);
    block15= new Box(780,250,30,40);
    block16= new Box(810,250,30,40);
    block17= new Box(840,250,30,40);
    block18= new Box(870,250,30,40);
    block19= new Box(900,250,30,40);

    block20= new Box(780,210,30,40);
    block21= new Box(810,210,30,40);
    block22= new Box(840,210,30,40);
    block23= new Box(870,210,30,40);

    block24= new Box(810,170,30,40);
    block25= new Box(840,170,30,40);

    block26= new Box(825,130,30,40);

    polygon= Bodies.circle(150,200,20);
    World.add(world,polygon)

    slingshot= new SlingShot(this.polygon,{x:150,y: 200} );
    
    Engine.run(engine);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    strokeWeight(3);
    
    textSize(24);
    text("Drag the Hexagonal Stone and Release it, to Destroy the Blocks",50,100);
    groundObj.display();
    standObj.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();

    block13.display();

    standObj2.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();

    block20.display();
    block21.display();
    block22.display();
    block23.display();

    block24.display();
    block25.display();

    block26.display();

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x, polygon.position.y,50,50);

    slingshot.display();

    //drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if(keyCode===32){
       slingshot.attach(this.polygon);
    }
}