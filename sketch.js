
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let car_01
let cars = []

function preload() {
  car_01 = loadModel('Car_001.obj',true);
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  normalMaterial(); 
  model(car_01);
}

