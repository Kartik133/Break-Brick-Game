class BaseClass{
    constructor(x,y) {
       var options = {
          isStatic:true,
          restitution:1,
          friction:1,
          density:1
       }
  
       this.width = 25;
       this.height = 13;
       this.body = Bodies.rectangle(x,y,25,13,options);
  
       World.add(world,this.body);
    }
  
    display() {
       var pos = this.body.position;
       var Angle = this.body.angle;
  
       push();
         translate(pos.x,pos.y);
         rotate(Angle);
         rectMode(CENTER);
        rect(0,0,this.width,this.height);
       pop();
    }
}