class BallShot {
   constructor(bodyA,pointB) {
      var options = {
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.04
      }

      this.shot = Constraint.create(options);

      World.add(world,this.shot);
   }

   attach(body){
      this.shot.bodyA = body;
  }

   fly() {
      this.shot.bodyA = null;

      /*if(ball.speed<3) {
         Matter.Body.setStatic(ball.body,true);
      }*/
   }

   display() {
      if(this.shot.bodyA) {
       var pointA = this.shot.bodyA.position;
       var pointB = this.shot.pointB;

       push();
        stroke('white');
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
      }
   }
}