var canvas,ball,surface1,surface2,surface3,surface4;
var music1;

function preload(){
    music1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();
 ball = createSprite(random(20,750),300,20,20);
 ball.shapeColor = "white";
 ball.velocityX = 6;
 ball.velocityY = 6;
 
 surface1 = createSprite(105,570,200,20);
 surface1.shapeColor = "violet";

 surface2 = createSprite(305,570,200,20);
 surface2.shapeColor = "hotpink";

 surface3 = createSprite(505,570,200,20);
 surface3.shapeColor = "yellow";

 surface4 = createSprite(705,570,200,20);
 surface4.shapeColor = "aqua";
 
}

function draw() {
    background(0);

    

     /*if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "violet";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
        
     }

     if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "hotpink";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
     }

     if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
    
     }

     if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = "aqua";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
     }*/

     

     /*if(surface1.isTouching(ball) ){
        ball.shapeColor = "violet";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
        
     }

     if(surface2.isTouching(ball)){
        ball.shapeColor = "hotpink";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
     }

     if(surface3.isTouching(ball) ){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
         ball.shapeColor = "white";
    
     }

     if(surface4.isTouching(ball) ){
        ball.shapeColor = "aqua";
        ball.velocityX = 0;
        ball.velocityY = 0;
     }
     else{
      ball.shapeColor = "white";
     }*/

     if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        
        ball.shapeColor = "violet";
        music1.play();
     }
   
     
     if(surface2.isTouching(ball) && ball.bounceOff(surface2)){ 
         
         ball.shapeColor = "hotpink";
         ball.velocityX = 0;
         ball.velocityY = 0;
         music1.stop();
     }
     

     if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "yellow";
     }
     

     if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
       ball.shapeColor = "aqua";
    }

    
     ball.bounceOff(surface1);
     ball.bounceOff(surface2);
     ball.bounceOff(surface3);
     ball.bounceOff(surface4);
     ball.bounceOff(edges);
     drawSprites();
     
     
     //createEdgeSprites();
}

/*function isTouching(ob1,ob2){
    if( ob1.x - ob2.x < ob1.width/2 + ob2.width/2
        && ob2.x - ob1.x < ob1.width/2 + ob2.width/2
        && ob1.y - ob2.y < ob1.height/2 + ob2.height/2 
        && ob2.y - ob1.y < ob1.height/2 + ob2.height/2){
    return true;
    }
    else{
    return false;    
    }
}

function bounceOff(ob1,ob2){
    if(ob1.x - ob2.x < ob1.width/2 + ob2.width/2
       && ob2.x - ob1.x < ob1.width/2 + ob2.width/2){

      ob1.velocityX = ob1.velocityX * (-1);
      ob2.velocityX = ob2.velocityX * (-1);
    }
    if(ob1.y - ob2.y < ob1.height/2 + ob2.height/2
       && ob2.y - ob1.y < ob1.height/2 + ob2.height/2){

       ob1.velocityY = ob1.velocityY * (-1);
       ob2.velocityY = ob2.velocityY * (-1);
    }
}*/
