const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var engine,world;
var ball,ballShot;
var boy,boy_img;
var gameState = "serve";
var score = 0;
var timeRemainingMinutes = 2;
var timeRemainingSeconds = 59; 

function preload() {
   boy_img = loadImage("boy.png");
}

function setup() {
  createCanvas(400,450);
 
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  boy = createSprite(200,380,1,8);
  boy.addImage("boy",boy_img);
  boy.scale = 0.1;

  ball = new Ball(200,350,25);

  brick1 = new Brick(13,7);
  brick2 = new Brick(38,7);
  brick3 = new Brick(63,7);
  brick4 = new Brick(88,7);
  brick5 = new Brick(113,7);
  brick6 = new Brick(138,7);
  brick7 = new Brick(163,7);
  brick8 = new Brick(188,7);
  brick9 = new Brick(213,7);
  brick10 = new Brick(238,7);
  brick11 = new Brick(263,7);
  brick12 = new Brick(288,7);
  brick13 = new Brick(313,7);
  brick14 = new Brick(338,7);
  brick15 = new Brick(363,7);
  brick16 = new Brick(388,7);
  brick17 = new Brick(13,20);
  brick18 = new Brick(38,20);
  brick19 = new Brick(63,20);
  brick20 = new Brick(88,20);
  brick21 = new Brick(113,20);
  brick22 = new Brick(138,20);
  brick23 = new Brick(163,20);
  brick24 = new Brick(188,20);
  brick25 = new Brick(213,20);
  brick26 = new Brick(238,20);
  brick27 = new Brick(263,20);
  brick28 = new Brick(288,20);
  brick29 = new Brick(313,20);
  brick30 = new Brick(338,20);
  brick31 = new Brick(363,20);
  brick32 = new Brick(388,20);
  brick33 = new Brick(13,33);
  brick34 = new Brick(38,33);
  brick35 = new Brick(63,33);
  brick36 = new Brick(88,33);
  brick37 = new Brick(113,33);
  brick38 = new Brick(138,33);
  brick39 = new Brick(163,33);
  brick40 = new Brick(188,33);
  brick41 = new Brick(213,33);
  brick42 = new Brick(238,33);
  brick43 = new Brick(263,33);
  brick44 = new Brick(288,33);
  brick45 = new Brick(313,33);
  brick46 = new Brick(338,33);
  brick47 = new Brick(363,33);
  brick48 = new Brick(388,33);
  brick49 = new Brick(13,46);
  brick50 = new Brick(38,46);
  brick51 = new Brick(63,46);
  brick52 = new Brick(88,46);
  brick53 = new Brick(163,46);
  brick54 = new Brick(188,46);
  brick55 = new Brick(213,46);
  brick56 = new Brick(238,46);
  brick57 = new Brick(313,46);
  brick58 = new Brick(338,46);
  brick59 = new Brick(363,46);
  brick60 = new Brick(388,46);
  brick61 = new Brick(13,59);
  brick62 = new Brick(38,59);
  brick63 = new Brick(63,59);
  brick64 = new Brick(88,59);
  brick65 = new Brick(163,59);
  brick66 = new Brick(188,59);
  brick67 = new Brick(213,59);
  brick68 = new Brick(238,59);
  brick69 = new Brick(313,59);
  brick70 = new Brick(338,59);
  brick71 = new Brick(363,59);
  brick72 = new Brick(388,59);
  brick73 = new Brick(13,72);
  brick74 = new Brick(38,72);
  brick75 = new Brick(63,72);
  brick76 = new Brick(88,72);
  brick77 = new Brick(163,72);
  brick78 = new Brick(188,72);
  brick79 = new Brick(213,72);
  brick80 = new Brick(238,72);
  brick81 = new Brick(313,72);
  brick82 = new Brick(338,72);
  brick83 = new Brick(363,72);
  brick84 = new Brick(388,72);
  brick85 = new Brick(13,85);
  brick86 = new Brick(38,85);
  brick87 = new Brick(63,85);
  brick88 = new Brick(88,85);
  brick89 = new Brick(113,85);
  brick90 = new Brick(138,85);
  brick91 = new Brick(163,85);
  brick92 = new Brick(188,85);
  brick93 = new Brick(213,85);
  brick94 = new Brick(238,85);
  brick95 = new Brick(263,85);
  brick96 = new Brick(288,85);
  brick97 = new Brick(313,85);
  brick98 = new Brick(338,85);
  brick99 = new Brick(363,85);
  brick100 = new Brick(388,85);
  brick101 = new Brick(13,98);
  brick102 = new Brick(38,98);
  brick103 = new Brick(63,98);
  brick104 = new Brick(88,98);
  brick105 = new Brick(113,98);
  brick106 = new Brick(138,98);
  brick107 = new Brick(163,98);
  brick108 = new Brick(188,98);
  brick109 = new Brick(213,98);
  brick110 = new Brick(238,98);
  brick111 = new Brick(263,98);
  brick112 = new Brick(288,98);
  brick113 = new Brick(313,98);
  brick114 = new Brick(338,98);
  brick115 = new Brick(363,98);
  brick116 = new Brick(388,98);
  brick117 = new Brick(13,111);
  brick118 = new Brick(38,111);
  brick119 = new Brick(63,111);
  brick120 = new Brick(88,111);
  brick121 = new Brick(113,111);
  brick122 = new Brick(138,111);
  brick123 = new Brick(163,111);
  brick124 = new Brick(188,111);
  brick125 = new Brick(213,111);
  brick126 = new Brick(238,111);
  brick127 = new Brick(263,111);
  brick128 = new Brick(288,111);
  brick129 = new Brick(313,111);
  brick130 = new Brick(338,111);
  brick131 = new Brick(363,111);
  brick132 = new Brick(388,111);

  ground = new Ground(200,445,600,10);

  ballShot = new BallShot(ball.body,{x:149,y:325});
}

function draw() {
  background("black");
  
  Engine.update(engine);

  if(gameState === "launched") {
    boy.x = mouseX;

    push();
     fill(255);
     textSize(15);
     text("Press Space Key to attach the ball again to the sling!",25,200);
    pop();
  }

  if(gameState === "serve") {
    push();
     fill(255);
     textSize(20);
     text("Press Space Key to start the Game!",40,200);
    pop();

    if(keyCode===32) {
      gameState = "onSling";
    }
  }

  text("Score:- " + score,320,150);

  if(gameState !== "end") {
     text("Time Remaining:- " + timeRemainingMinutes + ":" + timeRemainingSeconds,20,150);
  }
  
  
  if(gameState!=="serve" && gameState!=="end") {
   if(frameCount%30===0) {
     timeRemainingSeconds = timeRemainingSeconds - 1;
   }
  }
  
  if(gameState!=="launched" && gameState!=="end" && gameState!=="serve") {
    push();
     fill(255);
     textSize(20);
     text("Stretch & release the ball to throw it!",30,200);
    pop();
  }

  if(timeRemainingSeconds===0) {
    timeRemainingSeconds = 59;
    timeRemainingMinutes = timeRemainingMinutes - 1;
  }

  /*if(timeRemainingMinutes===0 && timeRemainingSeconds < 2) {
    timeRemainingMinutes = 0;
    timeRemainingSeconds = 0;
  }*/

  if(timeRemainingMinutes===0 && timeRemainingSeconds < 1.1) {
     gameState = "end";
  }

  if(gameState==="end") {
    text("Time Remaining:- 00:00",20,150);

    push();
     fill(255);
     textSize(20);
     text("Press R Key to start the Game!",50,200);
    pop();

    if(keyCode===82) {
       gameState = "serve";
    }

    if(gameState === "serve") {
      timeRemainingMinutes = 2;
      timeRemainingSeconds = 59;
      fill(255);
      textSize(20);
      text("Press Space Key to start the Game",30,200);
    }
  }

  //detectollision(ball,brick132);

  ball.display();

  push();
   fill("red");
   brick1.display();
   brick2.display();
   brick3.display();
   brick4.display();
   brick5.display();
   brick6.display();
   brick7.display();
   brick8.display();
   brick9.display();
   brick10.display();
   brick11.display();
   brick12.display();
   brick13.display();
   brick14.display();
   brick15.display();
   brick16.display();
   brick17.display();
   brick18.display();
   brick19.display();
   brick20.display();
   brick21.display();
   brick22.display();
   brick23.display();
   brick24.display();
   brick25.display();
   brick26.display();
   brick27.display();
   brick28.display();
   brick29.display();
   brick30.display();
   brick31.display();
   brick32.display();
   brick33.display();
   brick34.display();
   brick35.display();
   brick36.display();
   brick37.display();
   brick38.display();
   brick39.display();
   brick40.display();
   brick41.display();
   brick42.display();
   brick43.display();
   brick44.display();
   brick45.display();
   brick46.display();
   brick47.display();
   brick48.display();
  pop();

  push();
   fill("yellow");
   brick49.display();
   brick50.display();
   brick51.display();
   brick52.display();
   brick53.display();
   brick54.display();
   brick55.display();
   brick56.display();
   brick57.display();
   brick58.display();
   brick59.display();
   brick60.display();
   brick61.display();
   brick62.display();
   brick63.display();
   brick64.display();
   brick65.display();
   brick66.display();
   brick67.display();
   brick68.display();
   brick69.display();
   brick70.display();
   brick71.display();
   brick72.display();
   brick73.display();
   brick74.display();
   brick75.display();
   brick76.display();
   brick77.display();
   brick78.display();
   brick79.display();
   brick80.display();
   brick81.display();
   brick82.display();
   brick83.display();
   brick84.display();
  pop();

  push();
   fill("green");
   brick85.display();
   brick86.display();
   brick87.display();
   brick88.display();
   brick89.display();
   brick90.display();
   brick91.display();
   brick92.display();
   brick93.display();
   brick94.display();
   brick95.display();
   brick96.display();
   brick97.display();
   brick98.display();
   brick99.display();
   brick100.display();
   brick101.display();
   brick102.display();
   brick103.display();
   brick104.display();
   brick105.display();
   brick106.display();
   brick107.display();
   brick108.display();
   brick109.display();
   brick110.display();
   brick111.display();
   brick112.display();
   brick113.display();
   brick114.display();
   brick115.display();
   brick116.display();
   brick117.display();
   brick118.display();
   brick119.display();
   brick120.display();
   brick121.display();
   brick122.display();
   brick123.display();
   brick124.display();
   brick125.display();
   brick126.display();
   brick127.display();
   brick128.display();
   brick129.display();
   brick130.display();
   brick131.display();
   brick132.display();
  pop();

  ground.display();

  drawSprites();
  
  ballShot.display();

  console.log(gameState);
}

function mouseDragged() {
   if(gameState === "onSling") {
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
      //gameState = "launched";
   }
}

function mouseReleased() {
   if(gameState === "onSling") {
    ballShot.fly();

    if(frameCount%1===0) {
     gameState = "launched";
    }
   }
}

function keyPressed() {
   if(gameState==="launched" && keyCode===32) {
         boy.x = 200;
         ballShot.attach(ball.body);
         gameState = "onSling"; 
   }
}

/*function detectollision(lball,lbrick) {
  if(lball.body.position.y/2 - lbrick.body.position.y === 31.5 || lbrick.body.position.y - lball.body.position.y/2 === 31.5 || lball.body.position.x/2 - lbrick.body.position.x === 37.5 || lbrick.body.position.x - lball.body.position.x/2 === 31.5 || (lball.body.position.x/2 === lbrick.body.position.x && lball.body.position.y/2 === lbrick.body.position.y)) {
      World.remove(world,lbrick);
  }

  /*var distance = dist(ballBodyPosition.x,ballBodyPosition.y,brickBodyPosition.x,brickBodyPosition.y);

  if(distance <= lbrick.width + lball.r) {
    //Matter.Body.setStatic(lmango.body,false);
    
  }
  console.log(lball.body.position.y - lbrick.body.position.y);
}*/