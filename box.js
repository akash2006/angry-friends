class Box{
    constructor(x,y){
        var options = {
            'restitiution':0.04,
            'density':2,
            'friction':0.8
        }
        this.body = Bodies.rectangle(x,y,108,109);
        this.image = loadImage("pics/box.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y);
    }
}