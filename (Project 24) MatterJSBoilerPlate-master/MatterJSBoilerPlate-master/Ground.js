class Ground{

    constructor(x, y, w, h){

        var options = {

            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
            
        }

        this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body);
    }

    display(){
        
        push()
        rectMode(CENTER);
        fill(255);
        rect(this.x, this.y, this.w, this.h);
        pop()
    }
    
}