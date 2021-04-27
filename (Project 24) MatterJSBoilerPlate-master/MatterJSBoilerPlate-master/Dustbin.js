class Dustbin{
    constructor(x, y, w, h){

        var options = {

            isStatic: true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
            
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //translate(this.body.position.x, this.body.position.y);
        //rotate();
        fill(255)
        pop()
    }
    
}