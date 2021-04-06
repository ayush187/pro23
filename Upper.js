class Upper {
    constructor(x,y){
     var options={
         isStatic:true
     }
     this.body=Bodies.rectangle(x,y,130,10,options)
     this.body.width=50
     this.body.height=40
     World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,130,10)
        pop();
    }
}