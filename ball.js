class Ball{
  constructor(x,y,radius) {
     var options = {
        restitution:1,
        friction:1,
        density:1
     }

     this.radius = radius;
     this.body = Bodies.circle(x,y,(radius-11)/1.1,options);

     World.add(world,this.body);
  }

  display() {
     var pos = this.body.position;
     var Angle = this.body.angle;

     push();
       translate(pos.x,pos.y);
       rotate(Angle);
       fill("silver");
      circle(0,0,this.radius);
     pop();
  }
}