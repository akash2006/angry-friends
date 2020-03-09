class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.image = loadImage("pics/slingshot.png");
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        
        var pointB = this.pointB;
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            
            stroke("black");
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            line(pointA.x,pointA.y,pointB.x+37,pointB.y+4);
        }
        imageMode(CENTER);
        image(this.image,pointB.x+15,pointB.y+40);
    }
}