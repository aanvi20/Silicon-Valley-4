/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var infant, infant_bg, infant_bg_2
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9
var infant_IMG
var invisibleGround

var health, happiness, wealth, social, knowledge
var checkValue 
var obstaclesGroup

var child_bg, child_bg_2, child, child_IMG
var obstacle_child1, obstacle_child2, obstacle_child3, obstacle_child4, obstacle_child5, obstacle_child6
var obstacle_child7, obstacle_child8, obstacle_child9, obstacle_child10, obstacle_child11, obstacle_child12

var checkValue2
var obstaclesGroup_Child

var bigpink, bigblue, bigred, biggreen
var bigpinkIMG, bigblueIMG, bigredIMG, biggreenIMG
var dot_colour

var plain1, plain2, plain3, plain4, plain5
var pencil
var colour1Group, colour2Group, colour3Group, colour4Group, colour5Group

var maths_test_bg, maths_test_bg_IMG
var maths_test

function preload() {
   infant_bg_2 = loadImage("Infant bg.png")
   infant_IMG = loadImage("Images/Infant/infant.gif")

   obstacle1 = loadImage("Images/Infant/baby food.gif");
   obstacle2 = loadImage("Images/Infant/dirty hands.gif");
   obstacle3 = loadImage("Images/Infant/milk bottle.png");
   obstacle4 = loadImage("Images/Infant/parents.png");
   obstacle5 = loadImage("Images/Infant/rattle.png");
   obstacle6 = loadImage("Images/Infant/stroller.png");
   obstacle7 = loadImage("Images/Infant/toy 1.png");
   obstacle8 = loadImage("Images/Infant/Toy 2.gif");
   obstacle9 = loadImage("Images/Infant/vaccine.png");
   
   child_bg_2 = loadImage("Images/Childhood/Childhood bg.jpg")
   child_IMG = loadImage("Images/Childhood/child.gif")

   obstacle_child1 = loadImage("Images/Childhood/burger.png")
   obstacle_child2 = loadImage("Images/Childhood/coca cola.png")
   obstacle_child3 = loadImage("Images/Childhood/fruits.png")
   obstacle_child4 = loadImage("Images/Childhood/glass of milk.png")
   obstacle_child5 = loadImage("Images/Childhood/good marks.gif")
   obstacle_child6 = loadImage("Images/Childhood/injury.png")
  
   obstacle_child7 = loadImage("Images/Childhood/pizza.png")
   obstacle_child8 = loadImage("Images/Childhood/playing.png")
   obstacle_child9 = loadImage("Images/Childhood/toy areoplane.png")
   obstacle_child10 = loadImage("Images/Childhood/toy car.png")
   obstacle_child11 = loadImage("Images/Childhood/vegetables.gif")
   obstacle_child12 = loadImage("Images/Childhood/video games.png")

   bigpinkIMG = loadImage("Images/Childhood/pDot.gif")
   bigblueIMG = loadImage("Images/Childhood/bDot.gif")
   biggreenIMG = loadImage("Images/Childhood/gDot.gif")
   bigredIMG = loadImage("Images/Childhood/rDot.gif")

   plain1_IMG = loadImage("Images/Childhood/Plain 1.gif")
   plain2_IMG = loadImage("Images/Childhood/Plain 2.gif")
   plain3_IMG = loadImage("Images/Childhood/Plain 3.gif")
   plain4_IMG = loadImage("Images/Childhood/Plain 4.gif")
   plain5_IMG = loadImage("Images/Childhood/Plain 5.gif")

   colour1_IMG = loadImage("Images/Childhood/Colour 1.gif")
   colour2_IMG = loadImage("Images/Childhood/Colour 2.gif")
   colour3_IMG = loadImage("Images/Childhood/Colour 3.gif")
   colour4_IMG = loadImage("Images/Childhood/Colour 4.gif")
   colour5_IMG = loadImage("Images/Childhood/Colour 5.gif")

   maths_test_bg_IMG = loadImage("Images/Childhood/maths test bg.jpg")
}

function setup(){
    var canvas = createCanvas(900,700);
    //engine = Engine.create();
    //world = engine.world;

    infant_bg = createSprite(600, 300);
    infant_bg. addImage(infant_bg_2);
    infant_bg.scale = 3.2;

    infant = createSprite(100, 620, 50, 50)
    infant.addImage(infant_IMG);
    infant.scale = 0.2

    child_bg = createSprite(450, 300);
    child_bg. addImage(child_bg_2);
    child_bg.scale = 2.3;
    child_bg.visible = false;
   
    child = createSprite(100, 600, 50, 50)
    child.addImage(child_IMG);
    child.scale = 0.2
    child.visible = false;


    invisibleGround = createSprite(600, 650, 1200, 20)
    invisibleGround.visible = false;

 
    bigpink = createSprite(200, 300);
    bigpink.addImage(bigpinkIMG);
    bigpink.scale=0.5
    bigpink.visible=false;
  
  biggreen = createSprite(400, 300);
  biggreen.addImage(biggreenIMG);
  biggreen.scale=0.5
  biggreen.visible=false;
  
  bigblue = createSprite(600, 300);
  bigblue.addImage(bigblueIMG);
  bigblue.scale=0.5
  bigblue.visible=false;

  bigred = createSprite(800, 300);
  bigred.addImage(bigredIMG);
  bigred.scale=0.5
  bigred.visible=false;

  plain1 = createSprite(150, 300);
  plain1.addImage(plain1_IMG);
  plain1.scale=0.5
  plain1.visible=false;

  plain2 = createSprite(300, 300);
  plain2.addImage(plain2_IMG);
  plain2.scale=0.5
  plain2.visible=false;

  plain3 = createSprite(450, 300);
  plain3.addImage(plain3_IMG);
  plain3.scale=0.5
  plain3.visible=false;

  plain4 = createSprite(600, 300);
  plain4.addImage(plain4_IMG);
  plain4.scale=0.5
  plain4.visible=false;

  plain5 = createSprite(750, 300);
  plain5.addImage(plain5_IMG);
  plain5.scale=0.5
  plain5.visible=false;

  maths_test_bg = createSprite(450, 350)
  maths_test_bg.addImage(maths_test_bg_IMG);
  maths_test_bg.scale = 2
  //maths_test_bg.visible = false;

  

    health = 50
    happiness = 50
    wealth = 0
    social = 50
    knowledge = 0
    checkValue = 0
    checkValue2 = 0

    

    obstaclesGroup = new Group();
    obstaclesGroup_Child = new Group ();
    
    blueGroup = new Group ();
    greenGroup = new Group ();
    redGroup = new Group ();
    pinkGroup = new Group ();
    
    colour1Group = new Group ();
    colour2Group = new Group ();
    colour3Group = new Group ();
    colour4Group = new Group ();
    colour5Group = new Group ();
}

function draw(){
    background(0);
  //  Engine.update(engine);
  dot_colour = Math.round(random(1, 4))
  pencil = Math.round(random(1, 5))

  if( keyDown("space") && infant.y >= 550) {
   infant.velocityY = -12;
   
 }


 infant.velocityY = infant.velocityY + 0.8

 infant.collide(invisibleGround);

 if( keyDown("space") && child.y >= 550) {
        child.velocityY = -12;
        
      }
     
     
      child.velocityY = child.velocityY + 0.8
     
      child.collide(invisibleGround);
   

     infant_bg.velocityX = -3

     if (infant_bg.x < 0){
        infant_bg.x = infant_bg.width/2;
      }

    
      child_bg.velocityX = -3

      if (child_bg.x < 0){
         child_bg.x = child_bg.width/2;
      }
     
      
     
      spawnObstacles();
      

      if(infant.isTouching(obstaclesGroup) && checkValue === 1){
          obstaclesGroup.destroyEach();
          health = health + 5
      }

      if(infant.isTouching(obstaclesGroup) && checkValue === 2){
        obstaclesGroup.destroyEach();
        health = health-5
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 3){
        obstaclesGroup.destroyEach();
        health = health + 5
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 4){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       social = social + 5
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 5){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 6){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
      
    }
   
    if(infant.isTouching(obstaclesGroup) && checkValue === 7){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 8){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 9){
        obstaclesGroup.destroyEach();
       happiness = happiness - 5
       health = health + 5
       
    }

    if(frameCount >= 1250){
   
     infant_bg.visible = false;
     infant.visible = false;
      
     child_bg.visible = true
     child.visible = true

     spawnObstacles2();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 1){
        obstaclesGroup_Child.destroyEach();
        health = health - 5
        happiness = happiness + 5
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 2){
        obstaclesGroup_Child.destroyEach();
        health = health - 5
        happiness = happiness + 5
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 3){
        obstaclesGroup_Child.destroyEach();
        health = health + 5
        
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 4){
        obstaclesGroup_Child.destroyEach();
        health = health + 5
        
        
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 5){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
          
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 6){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness - 5 
        health = health - 5  
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 7){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health - 5  
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 8){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health + 5  
        social = social + 5
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 9){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
       
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 10){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
       
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 11){
        obstaclesGroup_Child.destroyEach();
        health = health + 5  
       
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 12){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health - 5  
        social = social - 5
    }

    if (frameCount >= 1500 && frameCount<= 3000){
        bigred.visible = true;
        biggreen.visible = true;
        bigpink.visible = true;
        bigblue.visible = true;
        switch(dot_colour){
                case 1: pink_dots();
                      break;
                case 2: green_dots();
                      break;
                case 3: blue_dots();
                      break;
                case 4: red_dots();
                      break;
                      
                }
    }

    if(frameCount >= 3100 && frameCount<= 4600){
      plain1.visible = true;
      plain2.visible = true;
      plain3.visible = true;
      plain4.visible = true;
      plain5.visible = true;

      bigred.destroy();
      biggreen.destroy();
      bigpink.destroy();
      bigblue.destroy();

      switch(pencil){
        case 1: spawnColour1();
              break;
        case 2: spawnColour2();
              break;
        case 3: spawnColour3();
              break; 
        case 4: spawnColour4();
              break;
        case 5: spawnColour5();
              break;       
      }
    }

      
   if(mousePressedOver(bigpink)){
        pinkGroup.destroyEach();
      
        
      }
      
      if(mousePressedOver(biggreen)){
        greenGroup.destroyEach();
       
      }
      
      if(mousePressedOver(bigblue)){
        blueGroup.destroyEach();
      
      }
      
      if(mousePressedOver(bigred)){
        redGroup.destroyEach();
       
      }



       
      if(mousePressedOver(plain1)){
        colour1Group.destroyEach();
       
      }

      if(mousePressedOver(plain2)){
        colour2Group.destroyEach();
       
      }

      if(mousePressedOver(plain3)){
        colour3Group.destroyEach();
       
      }

      if(mousePressedOver(plain4)){
        colour4Group.destroyEach();
       
      }

      if(mousePressedOver(plain5)){
        colour5Group.destroyEach();
       
      }


      if (frameCount >= 4700 && frameCount <= 6200){
        child.destroy();
        child_bg.destroy();
        plain1.destroy();
        plain2.destroy();
        plain3.destroy();
        plain4.destroy();
        plain5.destroy();
        maths_test_bg.visible = true;

       
       
      }

 drawSprites();

      textSize(20);
      fill ("black")
      text ("Health: " + health, 100, 100)
      text ("Happiness: " + happiness, 300, 100)
      text ("Wealth: " + wealth, 500, 100)
      text ("Social: " + social, 700, 100)
      text ("Knowledge: " + knowledge, 700, 150)

      textSize(24);
      fill ("white")
      text ("153 + 356 = ", 420, 200)
      text ("883 x 175 = ", 420, 250)
      text ("954 - 456 = ", 420, 300)
      text ("1000 / 08 = ", 420, 350)
      text ("5673 x 25 = ", 420, 400)
      text ("4565 + 79 = ", 420, 450)
      
     maths_test = new MathsTest();
     maths_test.display();

     

      
}

function spawnObstacles() {
   if(frameCount % 150 === 0 && frameCount <= 1250) {
     var obstacle = createSprite(1250,height-200,10,40);
     //obstacle.debug = true;
     obstacle.velocityX = -7;
     
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               checkValue = 1;
               break;
       case 2: obstacle.addImage(obstacle2);
               checkValue = 2;
               break;
       case 3: obstacle.addImage(obstacle3);
               checkValue = 3;
               break;
       case 4: obstacle.addImage(obstacle4);
               checkValue = 4;
               break;
       case 5: obstacle.addImage(obstacle5);
               checkValue = 5;
               break;
       case 6: obstacle.addImage(obstacle6);
               checkValue = 6;
               break;
       case 7: obstacle.addImage(obstacle7);
               checkValue = 7;
               break;   
       case 8: obstacle.addImage(obstacle8);
               checkValue = 8;
               break; 
       case 9: obstacle.addImage(obstacle9);
               checkValue = 9;
               break;    
       default: break;
     }
     
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
    // obstacle.lifetime = 300;
     //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   }
 }

 function spawnObstacles2() {
        if(frameCount % 100 === 0 && frameCount >= 1250) {
          var obstacle_child = createSprite(1250,height-200,10,40);
          //obstacle.debug = true;
          obstacle_child.velocityX = -9;
          
          //generate random obstacles
          var rand2 = Math.round(random(1,6));
          switch(rand2) {
            case 1: obstacle_child.addImage(obstacle_child1);
                    checkValue2 = 1;
                    break;
            case 2: obstacle_child.addImage(obstacle_child2);
                    checkValue2 = 2;
                    break;
            case 3: obstacle_child.addImage(obstacle_child3);
                    checkValue2 = 3;
                    break;
            case 4: obstacle_child.addImage(obstacle_child4);
                    checkValue2 = 4;
                    break;
            case 5: obstacle_child.addImage(obstacle_child5);
                    checkValue2 = 5;
                    break;
            case 6: obstacle_child.addImage(obstacle_child6);
                    checkValue2 = 6;
                    break;
            case 7: obstacle_child.addImage(obstacle_child7);
                    checkValue2 = 7;
                    break;   
            case 8: obstacle_child.addImage(obstacle_child8);
                    checkValue2 = 8;
                    break; 
            case 9: obstacle_child.addImage(obstacle_child9);
                    checkValue2 = 9;
                    break;    
            case 10: obstacle_child.addImage(obstacle_child10);
                    checkValue2 = 10;
                    break;      
            case 11: obstacle_child.addImage(obstacle_child11);
                    checkValue2 = 11;
                    break;      
            case 12: obstacle_child.addImage(obstacle_child12);
                    checkValue2 = 12;
                    break;           
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          obstacle_child.scale = 0.2;
         // obstacle.lifetime = 300;
          //add each obstacle to the group
         obstaclesGroup_Child.add(obstacle_child);
        }
      }
 


      function pink_dots(){
        if(frameCount % 50 === 0){
        var pink = createSprite(900, 600);
        pink.scale=0.25
        pink.addImage(bigpinkIMG)
        pink.velocityX=-10
        pink.lifetime=200
        pinkGroup.add(pink)
        
      
        }
      }
      
      function green_dots(){
        if(frameCount % 50 === 0){
        var green = createSprite(900, 600);
        green.addImage(biggreenIMG)
        green.scale=0.25
        green.velocityX=-10
        green.lifetime=200
        greenGroup.add(green)
        
      
        }
      }
      
      
      function blue_dots(){
        if(frameCount % 50 === 0){
        var blue = createSprite(900, 600);
        blue.addImage(bigblueIMG)
        blue.scale=0.25
        blue.velocityX=-10
        blue.lifetime=200
        blueGroup.add(blue)
        
      
        }
      }
      
      
      function red_dots(){
        if(frameCount % 50 === 0 ){
        var red = createSprite(900, 600);
        red.addImage(bigredIMG)
        red.scale=0.25
        red.velocityX=-10
        red.lifetime=200
        redGroup.add(red)
        
      
        }
      }

      function spawnColour1(){
        if(frameCount % 50 === 0 ){
         var colour1 = createSprite(900, 600);
         colour1.addImage(colour1_IMG)
         colour1.velocityX=-10
         colour1.lifetime=200
         colour1Group.add(colour1)
         colour1.scale=0.3
         
       
         } 
       }

       function spawnColour2(){
        if(frameCount % 50 === 0 ){
         var colour2 = createSprite(900, 600);
         colour2.addImage(colour2_IMG)
         colour2.velocityX=-10
         colour2.lifetime=200
         colour2Group.add(colour2)
         colour2.scale=0.3
         
       
         } 
       }

       function spawnColour3(){
        if(frameCount % 50 === 0 ){
         var colour3 = createSprite(900, 600);
         colour3.addImage(colour3_IMG)
         colour3.velocityX=-10
         colour3.lifetime=200
        colour3Group.add(colour3)
        colour3.scale=0.3
         
       
         } 
       }

       function spawnColour4(){
        if(frameCount % 50 === 0 ){
         var colour4 = createSprite(900, 600);
         colour4.addImage(colour4_IMG)
         colour4.velocityX=-10
         colour4.lifetime=200
         colour4Group.add(colour4)
         colour4.scale=0.3
         
       
         } 
       }

       function spawnColour5(){
        if(frameCount % 50 === 0 ){
         var colour5 = createSprite(900, 600);
         colour5.addImage(colour5_IMG)
         colour5.velocityX=-10
         colour5.lifetime=200
         colour5Group.add(colour5)
         colour5.scale=0.3
         
       
         } 
       }
      