class Log{
    constructor(x,y,w,h){
        var options = {
            'restitiution':0.04,
            'density':2,
            'friction':0.8
        }
        this.body=Bodies.rectangle(x,y,w,h);
        this.w=w;
        this.h=h;
        this.image = loadImage("pics/log.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y);
    }
}