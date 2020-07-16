const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var engine,world
var particles = [];
var plinkos = [];
var divisions=[];
var particle;

var divisionHeight=300;
var score =0;
var gameState = "start" ;

var count = 0;

var rand1, rand2, rand3, rand4, rand5, rand6, rand7, rand8, rand9, rand10

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    rand1 = round(random(100,500))
    rand2 = round(random(100,500))
    rand3 = round(random(100,500))
    rand4 = round(random(100,500))
    rand5 = round(random(100,500))
    rand6 = round(random(100,500))
    rand7 = round(random(100,500))
    rand8 = round(random(100,500))
    rand9 = round(random(100,500))
    rand10 = round(random(100,500))

}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text(rand1,30,600)
   text(rand2,110,600)
   text(rand3,190,600)
   text(rand4,270,600)
   text(rand5,350,600)
   text(rand6,430,600)
   text(rand7,510,600)
   text(rand8,590,600)
   text(rand9,670,600)
   text(rand10,750,600)
  
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>780){
      if(particle.body.position.x<80){
        score = score+rand1
        particle=null
        rand1 = round(random(100,500))
        rand2 = round(random(100,500))
        rand3 = round(random(100,500))
        rand4 = round(random(100,500))
        rand5 = round(random(100,500))
        rand6 = round(random(100,500))
        rand7 = round(random(100,500))
        rand8 = round(random(100,500))
        rand9 = round(random(100,500))
        rand10 = round(random(100,500))
        if(count>=5){
          gameState = "end"
        }
      }

      else if(particle.body.position.x<160 && particle.body.position.x>80 ){
        score = score+rand2
        particle=null
        rand1 = round(random(100,500))
        rand2 = round(random(100,500))
        rand3 = round(random(100,500))
        rand4 = round(random(100,500))
        rand5 = round(random(100,500))
        rand6 = round(random(100,500))
        rand7 = round(random(100,500))
        rand8 = round(random(100,500))
        rand9 = round(random(100,500))
        rand10 = round(random(100,500))
        if(count>=5){
          gameState = "end"
          
        }
      }

      else if(particle.body.position.x<240 && particle.body.position.x>160 ){
        score = score+rand3
        particle=null
        rand1 = round(random(100,500))
        rand2 = round(random(100,500))
        rand3 = round(random(100,500))
        rand4 = round(random(100,500))
        rand5 = round(random(100,500))
        rand6 = round(random(100,500))
        rand7 = round(random(100,500))
        rand8 = round(random(100,500))
        rand9 = round(random(100,500))
        rand10 = round(random(100,500))
        if(count>=5){
          gameState = "end"
        }
      }

      else if(particle.body.position.x<320 && particle.body.position.x>240 ){
        score = score+rand4
        particle=null
        rand1 = round(random(100,500))
        rand2 = round(random(100,500))
        rand3 = round(random(100,500))
        rand4 = round(random(100,500))
        rand5 = round(random(100,500))
        rand6 = round(random(100,500))
        rand7 = round(random(100,500))
        rand8 = round(random(100,500))
        rand9 = round(random(100,500))
        rand10 = round(random(100,500))
        if(count>=5){
          gameState = "end"
        }
      }

      else if(particle.body.position.x<400 && particle.body.position.x>320 ){
        score = score+rand5
        particle=null
        rand1 = round(random(100,500))
        rand2 = round(random(100,500))
        rand3 = round(random(100,500))
        rand4 = round(random(100,500))
        rand5 = round(random(100,500))
        rand6 = round(random(100,500))
        rand7 = round(random(100,500))
        rand8 = round(random(100,500))
        rand9 = round(random(100,500))
        rand10 = round(random(100,500))
        if(count>=5){
          gameState = "end"
        }
      }
        else if(particle.body.position.x<480 && particle.body.position.x>400 ){
          score = score+rand6
          particle=null
          rand1 = round(random(100,500))
          rand2 = round(random(100,500))
          rand3 = round(random(100,500))
          rand4 = round(random(100,500))
          rand5 = round(random(100,500))
          rand6 = round(random(100,500))
          rand7 = round(random(100,500))
          rand8 = round(random(100,500))
          rand9 = round(random(100,500))
          rand10 = round(random(100,500))
          if(count>=5){
            gameState = "end"
          }
        }

        else if(particle.body.position.x<560 && particle.body.position.x>480 ){
          score = score+rand7
          particle=null
          rand1 = round(random(100,500))
          rand2 = round(random(100,500))
          rand3 = round(random(100,500))
          rand4 = round(random(100,500))
          rand5 = round(random(100,500))
          rand6 = round(random(100,500))
          rand7 = round(random(100,500))
          rand8 = round(random(100,500))
          rand9 = round(random(100,500))
          rand10 = round(random(100,500))
          if(count>=5){
            gameState = "end"
          }
        }

        else if(particle.body.position.x<640 && particle.body.position.x>560 ){
          score = score+rand8
          particle=null
          rand1 = round(random(100,500))
          rand2 = round(random(100,500))
          rand3 = round(random(100,500))
          rand4 = round(random(100,500))
          rand5 = round(random(100,500))
          rand6 = round(random(100,500))
          rand7 = round(random(100,500))
          rand8 = round(random(100,500))
          rand9 = round(random(100,500))
          rand10 = round(random(100,500))
          if(count>=5){
            gameState = "end"
          }
        }

        else if(particle.body.position.x<720 && particle.body.position.x>640 ){
          score = score+rand9
          particle=null
          rand1 = round(random(100,500))
          rand2 = round(random(100,500))
          rand3 = round(random(100,500))
          rand4 = round(random(100,500))
          rand5 = round(random(100,500))
          rand6 = round(random(100,500))
          rand7 = round(random(100,500))
          rand8 = round(random(100,500))
          rand9 = round(random(100,500))
          rand10 = round(random(100,500))
          if(count>=5){
            gameState = "end"
          }
        }

        else if(particle.body.position.x<800 && particle.body.position.x>720 ){
          score = score+rand10
          particle=null
          rand1 = round(random(100,500))
          rand2 = round(random(100,500))
          rand3 = round(random(100,500))
          rand4 = round(random(100,500))
          rand5 = round(random(100,500))
          rand6 = round(random(100,500))
          rand7 = round(random(100,500))
          rand8 = round(random(100,500))
          rand9 = round(random(100,500))
          rand10 = round(random(100,500))
          if(count>=5){
            gameState = "end"
          }
        }

    }
  }

  if(gameState === "end"){
    fill("red")
    textSize(70)
    text("GameOver",200,350)
  }



}

function mousePressed(){
  if(gameState!="end"){
    count++;
    particle=new Particle(mouseX, 10, 10)
    
  }
  
}