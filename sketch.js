var canvas;
var music;
var blueBox, orangeBox, greenBox, redBox, movingBox, wall1, wall2, wall3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueBox = createSprite (700,600,200,50);
    blueBox.shapeColor = "blue";

    orangeBox = createSprite (500,600,200,50);
orangeBox.shapeColor = "orange";

greenBox = createSprite (100,600,200,50);
greenBox.shapeColor = "green";

redBox = createSprite (300,600,200,50);
redBox.shapeColor = "red";

wall1 = createSprite (10,250,20,800);
wall1.shapeColor = "blue";

wall2 = createSprite (800,10,2000,30);
wall2.shapeColor = "green";

wall3 = createSprite (800,300,50,600);
wall3.shapeColor = "red";


    //create box sprite and give velocity
movingBox = createSprite (300,300,50,50);
movingBox.shapeColor = "white";
movingBox.velocityX = 5;
movingBox.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    if(blueBox.isTouching(movingBox) && movingBox.bounceOff(blueBox) ) 
    movingBox.shapeColor = "blue";

    if(orangeBox.isTouching(movingBox) && movingBox.bounceOff(orangeBox) ) 
    movingBox.shapeColor = "orange";


    if(greenBox.isTouching(movingBox) && movingBox.bounceOff(greenBox) ) 
    movingBox.shapeColor = "green";


    if(redBox.isTouching(movingBox) && movingBox.bounceOff(redBox) ) 
    movingBox.shapeColor = "red";

   if(wall1.isTouching(movingBox) && movingBox.bounceOff(wall1) ) 
   movingBox.shapeColor = "white";



    if(wall2.isTouching(movingBox) && movingBox.bounceOff(wall2) ) 
    movingBox.shapeColor = "white";


    if(wall3.isTouching(movingBox) && movingBox.bounceOff(wall3) ) 
    movingBox.shapeColor = "white";


    drawSprites();
}
