//Mit Hilfe von Max,Jan

//Game
var gamestate = "intro";
//Früchte
var Strawberry  = loadImage("Strawberry.png");
var Banana      = loadImage("Banana.png");
var Coconut     = loadImage("Coconut.png");
var Grapes      = loadImage("Grapes.png");
var Pineapple   = loadImage("Pineapple.png");
var Mango       = loadImage("Mango.png");
var Raspberry   = loadImage("Raspberry.png");
var Background1 = loadImage("Background1.jpg");
var Baba2       = loadImage("Baba2.png");
var StartScreen = loadImage("StartScreen.jpg");
var StartButton = loadImage("StartButton.png");


var player_img = image(Baba2,mouseX,470,19,19);



// Click Button and Start Game

var mousePressed = function() {
    if (mouseX >= 210 && mouseX <= 302 &&
        mouseY >= 400 && mouseY <= 428) {
            
  
    gamestate ="ingame"; 
  }
};  


var Fruits = [Strawberry,Banana,Coconut,Grapes,Pineapple,Raspberry];


var FoodAppear = function(xstart,ystart, fruit) {
    this.x = xstart;
    this.y = ystart;
    this.ydir = 5;
    this.fruit = Fruits[fruit];
};
    var fruit = new FoodAppear();



var FoodFalling = [];


noStroke();
fill(191, 245, 44,250);

for(var i=0; i <= 100; i++){
        append(FoodFalling,new FoodAppear(random(0,width),random(-10000, 0), floor(random(0, Fruits.length))));
}
 
 
var player = function(){
    this.player_img = image(Baba2, mouseX, 423, -104,91);
    this.x = 0;
    this.y = 0;
    this.points = 0;
     
    this.checkForFruit = function(){ 
        for (var i=0; i < FoodFalling.length; i++) {
            if ((FoodFalling[i].x >= this.x && FoodFalling[i].x <= (this.x + 40)) &&
                (FoodFalling[i].y >= this.y && FoodFalling[i].y <= (this.y + 100))) {
                FoodFalling[i].y = -400;
                FoodAppear.fruit++;
                this.points++;
                
                
                
                //if FoodFalling[i].fruit!= Kokos
                
            }

        }
    };
};
var player = new player();

 
var draw = function(){
    
    
//Score    
image(Background1,0,0,501,521);
textSize(20);
fill(3, 3, 3);
text("Score: " + player.points, 5,60);



noStroke();
fill(191, 245, 44,250);


 

// Gamestate: Intro 
if(gamestate === "intro"){
    
    
    image(StartScreen,0,-92,500,512);
    
    noStroke();
    fill(36, 82, 138);
    rect(0,405,499,172,26);
    
    stroke(83, 66, 87);
    fill(215, 156, 224);

    rect(190,400,112,28,8);
    image(StartButton,9,252,450,350);
    
    textSize(21);
    text("How to:",9,412,210,32);
    textSize(13);
    text("Eines Tages wachte Daler Mehendi neben seiner wunderschönen Prinzessin auf,",10,435,524,200);
    text("sie war sehr unglücklich da es in seinem Königreich so wenig Früchte gab.",10,449,524,200);
    text(" daher beschloss er, sich auf die Suche nach den schönsten Früchten für sie zu",6,464,524,200);
    text("machen.",10,478,524,200);
    fill(240, 216, 240);
    text("Hilf Dahler Mehendi indem du so viele Früchte wie möglich in 30 sec sammelst.",10,499,524,200);
    text("Kokosnüsse geben Minuspunkte, da die Prinzessin allergisch gegen diese ist.",10,514,524,200);
}

 if (gamestate === "YouWin"){
     
    background(137, 81, 145);
     textSize(30);
     text("You Win !!!!",173,77,200,200);
     textSize(15);
     text("You saved Dahler Mehendi, he is happy again!",97,120,462,200);
     textSize(20);
     text("https://www.youtube.com/watch?v=KTE6S-Pmhpw",21,259,500,500);
    
 
 }


// Gamestate: Spiel läuft
if(gamestate === "ingame"){


for (var i =0;i<FoodFalling.length;i++){
    
    image(FoodFalling[i].fruit,FoodFalling[i].x,FoodFalling     [i].y,42,42);  
            
            FoodFalling[i].y += FoodFalling[i].ydir;
            
            if(FoodFalling[i].y >= 550){
                FoodFalling[i].y = random(-5000, 0);
            }
    }
    
    player.x = mouseX-90;
    player.y = 404;
    player.checkForFruit();
var player = image(Baba2,mouseX,423,-104,91);
    

   
rect(-6,514,513,400,15);
 
noStroke();
fill(191, 245, 44,250);


  
    
    }
    
   
};
