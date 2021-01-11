class Particle{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0.3
        }
    this.x = x
    this.y = y
    this.radius = 10

    this.body = Bodies.circle(this.x, this.y, this.radius, options)
    this.color = color(random(0,225), random(0,225), random(0,225))

    World.add(world, this.body)
    }

    display(){
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, 10)
    }
}