class Paper{

    constructor(x, y, rad){

        var options = {

            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
            
        }

        this.x=x;
		this.y=y;
		this.rad=rad;
        this.body = Bodies.circle(x, y, rad, options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(255, 0, 0);
        ellipse(0, 0, this.rad, this.rad)
        pop();
    }
    
}