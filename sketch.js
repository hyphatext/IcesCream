function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
  
  //CHERRY
  stroke(255, 204, 0);
  strokeWeight(40);
  point(200, 175);
  
  //BIG SCOOP
  noStroke();
  fill(255);
  ellipse(width/2, height/2, 150, 150);
  
  //TOP SCOOP
  noStroke();
  fill(255);
  circle(width/2, height/2 - 75, 100);
  //(xposition,yposition,)

  noFill();
  strokeWeight(6);
  stroke(255, 204, 0);
  //(Red value, Green value, Blue Value,)
  //arc(width/2,height/2,150,150,175,PI,OPEN);
  //arc(width/2,height/2,150,150,PI,radians(360),OPEN);
  
  //CONE TOP
  strokeCap(SQUARE);
  arc(width/2,height/2,152,75,PI,radians(360),OPEN);
  //start position, start position, arc's bpunding box width, bounding box height, starting point on invisible ellipse, from that point to end where, style of arc
  
  // rectMode(CENTER);
  // const size = width * 0.3;
  // rect(width/2, height/2, 50, 50);
  // first two variables determine location x, y,
  // second two variables determine width x, height y
  
  //const size = width * 0.3;
  //ellipse(width/2, height/2, 100, 100);
  
  //FRAME
  rectMode(CENTER);
  rect(width/2, height/2, 300, 500)
  //rect(width/2, height/2 + 15, 110, 80);
  //(left top corner x position, y position, width, height)
  
  //CHERRY STEM
  line(200, 160, 225, 125);
  //line(x1, y1, x2, y2)

  //FRONT TRIANGLE
  triangle(160, 285, 238, 285, 200, 500);

  //triangle(x1, y1, x2, y2, x3, y3)
  // (x coordinate for 1st point, y coord. for 1st point,x coord. 2nd point, ... etc)
  
  //CONE
  quad(124, 302, 200, 265, 276, 302, 200, 500);
  //quad(x1, y1, x2,  y2,  x3,  y3,  x4,  y4, [detailX], [detailY])
  
  //SHINE
  rectMode(CORNER)
  noStroke();
  fill(255);
  square(185, 162, 8);
  
  noStroke();
  fill("Salmon");
  textSize(16);
  textAlign(CENTER);
  text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  //Calculates the closest integer value that is less than or equal to the value of the n parameter 
  
}