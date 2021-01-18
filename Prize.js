class Prize{
    constructor(x,y,width,height){
        var options = {
            density:1,
            restitution:0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,this.width,this.height);
        fill("yellow");
        pop();
    }
}