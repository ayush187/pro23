class Ball{
    constructor(x,y){
        var options={
            stiffness:0.04,
          friction:0,
            restitution:0.8,
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,10,options)
         World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("pink")

        ellipse(0,0,10)
        pop();


    }
}   