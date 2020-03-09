class me{
    constructor(x,y){
        var options = {
            'restitiution':0.04
        }
        this.body = Bodies.rectangle(x,y,100,127,options);
        this.image = loadImage("pics/me.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y);
    }
}