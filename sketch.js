
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;

var ground;
var hammer;
var stone1,stone2,stone3;
var iron1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12,sand13,sand14,sand15,sand16,
sand17,sand18,sand19,sand20,sand21,sand22,sand23,sand24,sand25,sand26,sand27,sand28,sand29,sand30,sand31,sand32,
sand33,sand34,sand35,sand36,sand37,sand38,sand39,sand40,sand41,sand42,sand43,sand44,sand45,sand46,sand47,sand48,
sand49,sand50;
var rubber1,rubber2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,30);

	hammer = new Hammer(200,200,100,90);
	stone1 = new Stone(570,200,70,70);
	stone2 = new Stone(600,200,70,70);
	stone3 = new Stone(550,100,70,70);
	iron1 = new Iron(300,300,50,35);
    sand1 = new Sand(500,200,6);
	sand2 = new Sand(515,200,5);
	sand3 = new Sand(520,200,6);
	sand4 = new Sand(525,200,5);
	sand5 = new Sand(530,200,6);
	sand6 = new Sand(535,200,5);
	sand7 = new Sand(540,200,5);
	sand8 = new Sand(545,200,6);
	sand9 = new Sand(550,200,5);
	sand10 = new Sand(555,200,5);
	sand11 = new Sand(560,200,5);
	sand12 = new Sand(565,200,5);
	sand13 = new Sand(570,200,5);
	sand14 = new Sand(575,200,5);
	sand15 = new Sand(580,200,5);
	sand16 = new Sand(585,200,5);
	sand17 = new Sand(590,200,5);
	sand18 = new Sand(595,200,5);
	sand19 = new Sand(600,200,5);
	sand20 = new Sand(605,200,6);
	sand21 = new Sand(610,200,5);
	sand22 = new Sand(615,200,7);
	sand23 = new Sand(620,200,5);
	sand24 = new Sand(625,200,5);
	sand25 = new Sand(630,200,5);
	sand26 = new Sand(635,200,6);
	sand27 = new Sand(640,200,5);
	sand28 = new Sand(645,200,5);
	sand29 = new Sand(650,200,6);
	sand30 = new Sand(655,200,5);
	sand31 = new Sand(660,200,5);
	sand32 = new Sand(665,200,7);
	sand33 = new Sand(670,200,5);
	sand34 = new Sand(675,200,5);
	sand35 = new Sand(680,200,5);
	sand36 = new Sand(685,200,5);
	sand37 = new Sand(690,200,5);
	sand38 = new Sand(695,200,5);
	sand39 = new Sand(700,200,5);
	sand40 = new Sand(502,200,5);
	sand41 = new Sand(512,200,5);
	sand42 = new Sand(522,200,5);
	sand43 = new Sand(532,200,6);
	sand44 = new Sand(542,200,5);
	sand45 = new Sand(552,200,5);
	sand46 = new Sand(562,200,5);
	sand47 = new Sand(572,200,5);
	sand48 = new Sand(582,200,5);
	sand49 = new Sand(592,200,5);
	sand50 = new Sand(602,200,6);


	rubber1 = new Rubber(200,200,35);
	rubber2 = new Rubber(800,200,35);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200, 107, 250);

  ground.display();
  hammer.display();
  stone1.display();
  stone2.display();
  stone3.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  sand16.display();
  sand17.display();
  sand18.display();
  sand19.display();
  sand20.display();
  sand21.display();
  sand22.display();
  sand23.display();
  sand24.display();
  sand25.display();
  sand27.display();
  sand28.display();
  sand29.display();
  sand30.display();
  sand31.display();
  sand32.display();
  sand33.display();
  sand34.display();
  sand35.display();
  sand36.display();
  sand37.display();
  sand38.display();
  sand39.display();
  sand40.display();
  sand41.display();
  sand42.display();
  sand43.display();
  sand44.display();
  sand45.display();
  sand47.display();
  sand48.display();
  sand49.display();
  sand50.display();
  
  rubber1.display();
  rubber2.display();

  drawSprites();
 
}



