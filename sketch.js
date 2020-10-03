
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree_img, tree, boy_img, boy;
var mango_img, mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	tree_img = loadImage("tree.png");
	boy_img = loadImage("boy.png");
	mango_img = loadImage("mango.png");
	stone_img = loadImage("stone.png");
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(470, 500, 2000, 10);
	tree = createSprite(1050, 300, 20, 150);
	tree.addImage(tree_img);
	tree.scale = 0.3; 
	boy = createSprite(200, 440, 20, 50);
	boy.addImage(boy_img);
	boy.scale = 0.1;
	mango1 = createSprite(1050, 180, 50, 20);
	mango1.addImage(mango_img);
	mango1.scale = 0.1;
	mango2 = createSprite(1100, 230, 50, 20);
	mango2.addImage(mango_img);
	mango2.scale = 0.1;
	mango3 = createSprite(1150, 280, 50, 20);
	mango3.addImage(mango_img);
	mango3.scale = 0.1;
	mango4 = createSprite(950, 250, 50, 20);
	mango4.addImage(mango_img);
	mango4.scale = 0.1;
	mango5 = createSprite(1150, 210, 50, 20);
	mango5.addImage(mango_img);
	mango5.scale = 0.1;
	mango6 = createSprite(1050, 280, 50, 20);
	mango6.addImage(mango_img);
	mango6.scale = 0.1;
	mango7 = createSprite(1050, 180, 50, 20);
	mango7.addImage(mango_img);
	mango7.scale = 0.1;
	mango8 = createSprite(990, 300, 50, 20);
	mango8.addImage(mango_img);
	mango8.scale = 0.1;
	stone = createSprite(150, 380, 50, 50);
	stone.addImage(stone_img);
	stone.scale = 0.07;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  drawSprites(); 
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseRealeased() {
    Slingshot.fly();
}
