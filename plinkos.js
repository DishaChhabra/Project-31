class Plinko{
  constructor(x,y){
    var options = {
      restitution: 1,
      isStatic: true
    }
    this.radius = 10
    this.body = Bodies.circle(x,y,this.radius, options)
    this.x = x;
    this.y = y;

    World.add(world, this.body)
  }

  display(){
    fill("white")
    ellipseMode(RADIUS)
    ellipse(this.body.position.x, this.body.position.y, 10)
  }
}