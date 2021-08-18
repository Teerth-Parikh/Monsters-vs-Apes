
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Kong;
var Gojira;
var bg;
var bgImg;
var KongImg;
var GojiraImg;
//var TowerImg;
var tower;
var towerImage;

function preload() 
{
  KongImg = loadImage("Kong.png");
  GojiraImg = loadImage("Gojira.png");
  bgImg = loadImage("Field.png");
  towerImage = loadImage("Tower.png");
}

function setup() {
  createCanvas(1000,700);

  bg = createSprite(500,350,20,30);
  bg.addImage(bgImg);
  bg.scale = 2.8;
  
  tower = createSprite(120, 425, 160, 310);
  tower.addImage(towerImage);

  Kong = createSprite(300,540,20,30);
  Kong.addImage(KongImg);
  Kong.scale = 0.4;

  Gojira = createSprite(800,500,20,30);
  Gojira.addImage(GojiraImg);
  Gojira.scale = 1.5;

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites();
}

