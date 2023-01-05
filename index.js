let paddleX;
let paddleY;

let rad = 30;        // Width of the ball
let xpos, ypos;    // Starting position of ball 

let xSpeedOfBall = 2.8;  // Speed of the ball
let ySpeedOfBall = 2.2;  // Speed of the ball

let xDirectionOfBall = 1;  // Direction the ball is going in the X position
let yDirectionOfBall = 1;  // Direction the ball is going in the Y position


function setup() {
    createCanvas(600, 600);

    xpos = width/2;
    ypos = height/2;
    
  }

  function draw(){
    gameStart();
  }

  function gameStart(){
    background(153);
    fill(50, 50, 50) ;
    rect(590, 100, 10, 140);

    fill(200, 0, 0);
    rect(540, 200, 50, 10);
    rect(mouseX, 560, 120, 10 );


     // Update the position of the shape
  xpos = xpos + ( xSpeedOfBall * xDirectionOfBall );
  ypos = ypos + ( ySpeedOfBall * yDirectionOfBall );
  
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - 15 || xpos < rad) {
    xDirectionOfBall *= -1;
  }
  if (ypos > height - 10 || ypos < rad) {
    yDirectionOfBall *= -1;
  }
  
  //  If the ball hits the bottom, decrement a life. 
  // if(ypos > height - 10){
  //   lives--;
  // }
  
  //  Checks if the ball hits the paddle
  if(xpos >= mouseX && xpos <= mouseX+105 && ypos > 550 && ypos < 555){
    yDirectionOfBall *= -1;
    //score++;      //  The score increments when the hits the paddle
    
    //  The ball gets faster when it hits the paddle
    // ySpeedOfBall += 0.5;
    // xSpeedOfBall += 0.5;
  }


    ellipse(xpos, ypos, rad, rad);
  }


  function keyPressed(){
  if(key ==  ' '){
    noLoop();
    
    textSize(30);
    text("Click ENTER To Resume", 190, 300);
    paused = true;
    playing = false;
    
  }
   
  if(key == ENTER){
    textSize(12);
    loop();
    paused = false;
    playing = true;
  }
  
  // if(key == ' ' && gameFinished == true){
  //   restart();
  // }
  
}
