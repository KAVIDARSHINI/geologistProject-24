class Sand{
    constructor(x,y,radius){
        var options = {
            'restitution':0.5,
            'friction':5,
            'density':1
        }
        this.x=x;
        this.y=y;
        this.radius=radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(221, 223, 0);
        ellipse(0,0,this.radius);
        pop();
    }
}