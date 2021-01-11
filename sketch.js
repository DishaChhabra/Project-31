const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Divisions = []
var Plinkos = []
var Particles = []

function setup() {
  createCanvas(480,600);
  engine = Engine.create()
  world = engine.world

  for(i=0; i<490; i=i+60){
    Divisions.push(new Division(i,475,10,250))
  }
  for(j=30; j<480; j=j+50){
    Plinkos.push(new Plinko(j,75))
  }
  for(j=30; j<480; j=j+50){
    Plinkos.push(new Plinko(j,150))
  }
  for(j=30; j<480; j=j+50){
    Plinkos.push(new Plinko(j,225))
  }
  for(j=30; j<480; j=j+50){
    Plinkos.push(new Plinko(j,300))
  }
  
  ground = new Division(240,595,480,10)
 
}

function draw() {
  background("black");  
  Engine.update(engine)
 
  fill("grey")
  ground.display()

  for(i=0; i<Divisions.length;i++){
    Divisions[i].display()
  }
  for(i=0; i<Plinkos.length; i++){
    Plinkos[i].display()
  }
  if(frameCount%50 === 0){
    Particles.push(new Particle(random(0,460), 20))
  }
  for(i=0; i<Particles.length; i++){
    Particles[i].display()
  }
 
  drawSprites();
}