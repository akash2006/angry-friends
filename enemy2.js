class Enemy2 extends Enemy{
    constructor(x,y){
        super(x,y,60,92);
        this.image = loadImage("pics/enemy2.png");
    }
    display(){
        super.display();
    }
}