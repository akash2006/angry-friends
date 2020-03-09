class Enemy{
    constructor(x,y,w,h){
        var options = {
            'restitiution':0.04
        }
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.image = loadImage("pics/enemy1.png");
        World.add(world,this.body);
        this.Visiblity = 255;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        if(this.body.speed<5){
             image(this.image,pos.x,pos.y);
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity-5;
            tint(255,this.Visiblity);
            image(this.image,pos.x,pos.y)
            pop();
        }
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-(201/4)*3){
            score++;
        }
    }
}