var flg=0;
var gem, ability;
var gemIMG, abilityIMG
var gem1, gem2, gem3
var l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16;
var wind, windIMG;
var henchmen1,henchmen2,henchmen3,henchmen4;
var henchmenIMG;
var count = 0;
var gems = [];
var henchmen = [];

function preload() {
  windIMG = loadAnimation("images/p1.PNG", "images/p2.PNG","images/p3.PNG","images/p4.PNG")
  henchmenIMG = loadAnimation("images/npc1.PNG", "images/npc2.png","images/npc3.png","images/npc4.png")
  gemIMG = loadImage("images/gemstone.jpg");
}

//arya better check. I can fly btw, I dont need ground, thats for skyblock nons, I AM LITERALLY JUST BETTER, UR DOGWATER NVR GONNA BE PROMOTED TO CATWATER


function setup() {
  createCanvas(900,500);
  l1 = createSprite(100,250, 5 , 400);
  l2 = createSprite(250, 50, 300, 5);
  l3 = createSprite(400, 250, 5, 400);
  l4 = createSprite(179.9838913797878990, 350, 5, 200);
  l5 = createSprite(320, 350, 5, 200);
  l6 = createSprite(250, 250, 145, 5);
  l7 = createSprite(180, 140, 5, 100);
  l8 = createSprite(320, 140, 5, 100);
  l9 = createSprite(250, 90, 145, 5);
  l10 = createSprite(250, 190, 145, 5);
  l11 = createSprite(500, 250, 5, 400);
  l12 = createSprite(600, 135, 5, 170);
  l13 = createSprite(600, 365, 5, 170);

   wind = createSprite(260, 215);
   wind.addAnimation("running", windIMG);
   wind.scale = 0.2;

  henchmen1 = createSprite(20,20);
  henchmen1.addAnimation("running", henchmenIMG);
  henchmen2 = createSprite(560,431);
  henchmen2.addAnimation("running", henchmenIMG);
  henchmen3 = createSprite(130, 415);
  henchmen3.addAnimation("running", henchmenIMG);
  henchmen4 = createSprite(450, 59);
  henchmen4.addAnimation("running", henchmenIMG);
  henchmen = [henchmen1, henchmen2, henchmen3,henchmen4];

  gem1 = createSprite(280, 275)
  gem1.addImage(gemIMG);
  gem1.scale = 0.04;

  gem2 = createSprite(347, 80)
  gem2.addImage(gemIMG);
  gem2.scale = 0.04;

  gem3 = createSprite(719, 461)
  gem3.addImage(gemIMG);
  gem3.scale = 0.04;
  gems = [gem1,gem2,gem3];
}



function draw() {
  background(0);
  fill("white");
  keyPressed();

  wind.collide(l1);
  wind.collide(l2);
  wind.collide(l3);
  wind.collide(l4);
  wind.collide(l5);
  wind.collide(l6);
  wind.collide(l7);
  wind.collide(l8);
  wind.collide(l9);
  wind.collide(l10);
  wind.collide(l11);
  wind.collide(l12);
  wind.collide(l13);


  for(var i = 0; i < gems.length; i++){
    if(gems[i].isTouching(wind)){
      gems[i].destroy();
      count++;
    }
  }

  for(var h = 0;h < henchmen.length;h++){
    if(henchmen[h].isTouching(wind)){
      textSize(100);
      fill("red");
      text(" U LOST SUCKER", 50, 250);
      gameEnd();
    }
  }

  if(count===3){
    textSize(100);
    fill("green");
    text("U DIDNT LOSE", 50, 250);
    gameEnd();
  }

  if(henchmen1.y <= 20 && henchmen1.x <= 20){
    henchmen1.velocityY = 3;
    henchmen1.velocityX = 0;
  }
  else if(henchmen1.y > 475 && henchmen1.x <= 850){
    henchmen1.velocityY = 0;
    henchmen1.velocityX = 3;
  }
  else if(henchmen1.x > 850 && henchmen1.y >= 20){
    henchmen1.velocityX = 0;
    henchmen1.velocityY = -3;
  }
  else if (henchmen1.x > 800 && henchmen1.y <= 20){
    henchmen1.velocityY = 0;
    henchmen1.velocityX = -3;
  }
  if(henchmen3.x === 130 && henchmen3.y >= 415){
    henchmen3.velocityX = 0;
    henchmen3.velocityY = -3;
    flg = 0;
  }
  else if(henchmen3.x < 360 && henchmen3.y <= 70 && flg === 0){
    henchmen3.velocityX = 3;
    henchmen3.velocityY = 0;
  }
  else if(henchmen3.x >= 360 && henchmen3.y <= 70 && flg === 0){
    henchmen3.velocityX = 0;
    henchmen3.velocityY = 3;
  }
  else if(henchmen3.x > 360 && henchmen3.y > 415){
    henchmen3.velocityX = 0;
    henchmen3.velocityY = -3;
    flg = 1;
  }
  else if(henchmen3.x >= 360 && henchmen3.y === 211 && flg === 1){
    henchmen3.velocityX = -3;
    henchmen3.velocityY = 0;
  }
  else if(henchmen3.x <= 130 && henchmen3.y >= 211 && flg === 1){
    henchmen3.velocityX = 0;
    henchmen3.velocityY = 3;
  }

  if(henchmen4.y < 60){
    henchmen4.velocityY = 3;
  }
  else if(henchmen4.y > 430){
    henchmen4.velocityY = -3;
  }
  
  if(henchmen2.y < 60){
    henchmen2.velocityY = 3;
  }
  else if(henchmen2.y > 430){
    henchmen2.velocityY = -3;
  }
 
  text(mouseX+","+mouseY, 50, 50);
  fill("red")
  line(600, 280, 745, 440);
  drawSprites();
}

function keyPressed(){
  if(keyCode === 119){
    wind.y -= 5;
  }
  if(keyCode === 97){
    wind.x -= 5;
  }
  if(keyCode === 115){
    wind.y += 5;
  }
  if(keyCode === 100){
    wind.x += 5;
  }
}

function gameEnd(){
  henchmen1.velocityX = 0
  henchmen2.velocityX = 0
  henchmen3.velocityX = 0
  henchmen4.velocityX = 0
  henchmen1.velocityY = 0
  henchmen2.velocityY = 0
  henchmen3.velocityY = 0
  henchmen4.velocityY = 0
}

//arya is still just better 
//#arya for pres