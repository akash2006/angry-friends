class Enemy3 extends Enemy{
    constructor(x,y){
        super(x,y,64,90);
        this.image = loadImage("pics/enemy3.png");
    }
    display(){
        super.display();
    }
}