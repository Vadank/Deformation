var wall1, wall2, wall3, car1, car2, car3, carimg1, carimg2, carimg3, w1, s1, w2, s2, w3, s3, d1, d2, d3;



function preload()
{

    carimg1 = loadAnimation("car.jpg");
    carimg2 = loadAnimation("car2.jpg");
    carimg3 = loadAnimation("car3.jpg")

}




function setup() {

    createCanvas(800, 400);

   

    
    
    

    car1 = createSprite(20, 80);
    car1.addAnimation("car", carimg1);
    car1.scale = 0.1;
    car1.velocityX = 10;
   
    wall1 = createSprite(700, 80, 4, 80);

    
    
    car2 = createSprite(20, 180);
    car2.addAnimation("car2", carimg2);
    car2.scale = 0.1;
    car2.velocityX = 8;
    
    wall2 = createSprite(700, 180, 4, 80);
    
    

    car3 = createSprite(20, 280);
    car3.addAnimation("car3", carimg3);
    car3.scale = 0.1;
    car3.velocityX = 5;
    
    wall3 = createSprite(700, 280, 4, 80);
    

    

    w1 = 2260;
    s1 = 60*60;

    w2 = 1522;
    s2 = 50*50;
    
    w3 = 3000;
    s3 = 45*45;

    d1 = 0.5 * w1 * s2 / 22500



    d2 = 0.5 * w2 * s2 / 22500
    d3 = 0.5 * w3 * s3 / 22500
}




function draw()
{

    car1.collide(wall1);

    car2.collide(wall2);
    
    car3.collide(wall3);

   background("white")
   
   
   
   drawSprites();
   
   // and if the console is showing one answer that is becayse it applies to all of them
   
   // all the feedbacks are in the console as the words are not written on the streetS.
  if(d1 >= 180 && car1.x == 648 || d2 >= 180 && car2.x == 648 || d1 >= 180 && car3.x == 648)
 {
   
   console.log("Fatal, Rating: D-");

 }
 if(d1 <= 180 && d1 >= 80 && car1.x == 648 || d2 <= 180 && d2 >= 80 && car2.x == 648 || d3 <= 180 && d3 >= 80 && car3.x == 648)
 {
   
    console.log("Average, Rating: B+");
 
  }

  if(d1 <= 80 && car1.x == 648 || d2 <= 80 && car2.x == 648 || d3 <= 80 && car3.x == 648)
  {
    
    console.log("Good, Rating: A-");
 
  }
  

}