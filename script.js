//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject, fallingObject1, fallingObject2, fallingObject3,fallingObject4, fallingObject5, fallingObject6, cooking;
let score = 0;
let time = 0, time2 = 0;
let c_count = 0, b_count = 0, bf_count = 0, t_count = 0, ba_count = 0, o_count = 0,e_count = 0,all_count = 0, burger_count = 0, s_count = 0;
let bgImg, catcherImg, objImg, objImg1,objImg2,objImg3,objImg4,objImg5,objImg6, burger;
let myFont;
let catchSound, bgMusic, gameover;
let arrow, star;
let fade,shop;
let fadeAmount = 2;
let screen = 0;
let bgColor = "#424e66";
let buttonColor = "#5475a0";
/* PRELOAD LOADS FILES */
function preload(){
	bgImg = loadImage("assets/bg.png");
	end = loadImage("assets/end.png");
	objImg = loadImage("assets/let.png");
  objImg1 = loadImage("assets/tomato.png");
  objImg2 = loadImage("assets/beef.png");
  objImg3 = loadImage("assets/chicken.png");
  objImg4 = loadImage("assets/cheese.png");
  objImg5 = loadImage("assets/bacon.png");
  objImg6 = loadImage("assets/egg.png");
  end = loadImage("assets/end.png");
  burger = loadImage("assets/burger.gif");
	catcherImg = loadImage("assets/basket.png");
	myFont = loadFont('assets/letters.ttf');
	catchSound = loadSound('assets/catchsound.mp3');
	gameover = loadSound('assets/Lose.wav');
	bgMusic = loadSound('assets/bgMusic.mp3');
  bonus = loadSound('assets/bonus.wav');
  star = loadImage("assets/star.gif");
  coin = loadImage("assets/coin.gif");
  bgImg2 = loadImage("assets/bg2.gif");
  bgImg3 = loadImage("assets/cooking.png");
  shop = loadImage("assets/shop.gif");
  aye = loadSound('assets/aye.wav');
  click = loadSound('assets/click.wav');
  goose = loadImage("assets/goose.gif");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(1425,765);

	// music!!
	bgMusic.loop();
	bgMusic.setVolume(0.03);
  gameover.setVolume(0.055);
  bonus.setVolume(0.055);
  catchSound.setVolume(0.055);
  aye.setVolume(0.055);
  click.setVolume(0.45);
	// set font
	textFont(myFont);

	//resizing bg image
  shop.resize(1425,765)
	bgImg.resize(1425,765);
  end.resize(1425,765);
  bgImg2.resize(1425,765);
  bgImg3.resize(1425,765);
	catcherImg.resize(280,0);
	objImg.resize(140,0);
	objImg1.resize(150,0);
  objImg2.resize(140,0);
  objImg3.resize(140,0);
  objImg4.resize(95,0);
  objImg5.resize(120,0);
  objImg6.resize(80,0);
  burger.resize(430,0);
  goose.resize(160,0);
  star.resize(60,0);
  coin.resize(260,0);
  setInterval(moveTarget, 2400);
  
   //Create falling object
  fallingObject = new Sprite(objImg,-200,0,10);//100;
  //shopbg = new Sprite(shop,705,388);//100;
  fallingObject1 = new Sprite(objImg1,-500,0,10);//100
  fallingObject2 = new Sprite(objImg2,-500,0,); //300
  fallingObject3 = new Sprite(objImg3,-500,0,); //300
  fallingObject4 = new Sprite(objImg4,-500,0,10);//100
  fallingObject5 = new Sprite(objImg5,-500,0,); //300
  fallingObject6 = new Sprite(objImg6,-500,0,);
  burger = new Sprite(burger,-500,0,);//300
	//fallingObject2.vel.y = 2;
  //Create catcher 
  catcher = new Sprite(catcherImg,-200,700,100,20,"k");
  fade = 0;

  fill("white");
  // Set up the home screen
  background(137, 213, 210);
  

  //***
  textSize(18);
  fill("#5475a0");

  enterButton = new Sprite(width / 2, height / 2 + 120);
  nextButton = new Sprite(-150, -150);
  burgerButton = new Sprite(-150, -150);
  deliverButton = new Sprite(-150, -150);
  //Draw enter button
  enterButton.w = width/4;
  enterButton.h = 60;
  enterButton.collider = "k";
  nextButton.w = width/4;
  nextButton.h = 60;
  nextButton.collider = "k";
  burgerButton.w = width/4;
  burgerButton.h = 60;
  burgerButton.collider = "k";
  deliverButton.w = width/4;
  deliverButton.h = 60;
  deliverButton.collider = "k";
  burger.collider = "k";
  //enterButton.collider = "k";
  enterButton.text = "Play";
  enterButton.color = "white";
  nextButton.text = "Continue";
  nextButton.color = "white";
  burgerButton.text = "Make burger (1pc)";
  burgerButton.color = "white";
  deliverButton.text = "Sell";
  deliverButton.color = "white";
}

/* DRAW LOOP REPEATS */
function draw() {
    image(shop,0,0);
    shop.play();
    fill("white");
    textSize(70);
    text("GooseHop", 420, 380 );//380
    textSize(70);
    fill("#124430");
    text("GooseHop", 425, 375 );//385
    image(goose,475,335);
    goose.play();
    fill("black");
    textSize(30);
    text("You're broke.", 515, 420);
    textSize(20);
    text("You need money to save your restaurant from debt!", 240, 455 );

    if (screen == 0) {
    if (enterButton.mouse.presses()) {
      click.play();
      print('pressed');
      enterButton.pos = { x: -100, y: -100 };
      screen = 1;
    }
  }

  if (screen == 1) {
  background(224,224,224);
	//bg image
    
	image(bgImg, 0, 0);
  image(star, 435, 4);
  fill(3,4,94)
    
	// add score
  time = 55 - round(millis()/1000);
	textSize(37);
	text("Score: " + score, 10, 50);
  textSize(24);
  text(`Time Left:\n${time}s`, 290, 685);
  textSize(14);
  text(`Chicken: ${c_count}  Beef: ${bf_count}`, 1105, 55);
  text(`Lettuce: ${b_count} Cheese: ${o_count}`, 1105, 85);
  text(`Tomato: ${t_count}   Bacon: ${ba_count}`, 1105, 115);
  text(`Egg: ${e_count}`, 1200, 145);

  //setting object velocity
	fallingObject.vel.y = 6;
	fallingObject1.vel.y = 6;
  fallingObject2.vel.y = 6;
  fallingObject3.vel.y = 6;
  fallingObject4.vel.y = 6;
  fallingObject5.vel.y = 6;
  fallingObject6.vel.y = 6;
	if (score < 2500){
    // Draw directions to screen
  textSize(16);
  fill(2,62,138, fade)
  text("Move the pot with the left and right\narrow keys to catch the falling ingredients\nquick! DON'T. MISS. THE. LETTUCE!", 10, 85);
  if (fade<0) fadeAmount=2; 
 
  if (fade>255) fadeAmount=-2; 
 
  fade += fadeAmount; 
  }else if (score >= 2500 && score < 3000){
  fill(2,62,138, fade)
  textSize(16);
  text("Honey is basically bee vomit.\nForager bees regurgitate it.", 10, 80);
  if (fade<0) fadeAmount=2; 
  if (fade>255) fadeAmount=-2; 
   fade += fadeAmount; 
  }
  if (score >= 3000 && score < 5000){
  fill(2,62,138, fade)
  textSize(16);
  text("Fake wasabi is\nactually horseradish.", 10, 80);
  if (fade<0) fadeAmount=2; 
  if (fade>255) fadeAmount=-2; 
   fade += fadeAmount; 
  }
  if (score >= 5000 && score < 6000){
  fill(2,62,138, fade)
  textSize(16);
  text("Tomato ketchup was used\nas medicine for 16 years.", 10, 80);
  if (fade<0) fadeAmount=2; 
  if (fade>255) fadeAmount=-2; 
   fade += fadeAmount; 
  }
	if (score >= 6000 && score < 7000){
  fill(2,62,138, fade)
  textSize(16);
  text("Ancient civilizations used\nchocolate as currency.", 10, 80);
  if (fade<0) fadeAmount=2; 
  if (fade>255) fadeAmount=-2; 
   fade += fadeAmount; 
  }
  if (score >= 8000){
  fill(2,62,138, fade)
  textSize(16);
  text("Food tastes different in an airplane\nbecause altitude changes your body\nchemistry and decreases your\ntaste sensitivity.", 10, 80);
  if (fade<0) fadeAmount=2; 
  if (fade>255) fadeAmount=-2; 
   fade += fadeAmount; 
  }
	// if falling Object reaches bottom, move it back to random position at top
	if (fallingObject.y >= height) {
		fallingObject.y = 0;
		fallingObject.x = random(width);
		fallingObject.vel.y = random(7,12);

		score = score - 200;
	  gameover.play();
	}
  
if (fallingObject1.y >= height) {
		fallingObject1.y = 0;
		fallingObject1.x = random(width);
		fallingObject1.vel.y = random(6,12);
	}
  
if (fallingObject2.y >= height) {
		fallingObject2.y = 0;
		fallingObject2.x = random(width);
		fallingObject2.vel.y = random(7,12);
	}
if (fallingObject3.y >= height) {
		fallingObject3.y = 0;
		fallingObject3.x = random(width);
		fallingObject3.vel.y = random(6,12);
	}
if (fallingObject4.y >= height) {
		fallingObject4.y = 0;
		fallingObject4.x = random(width);
		fallingObject4.vel.y = random(7,12);
	}
if (fallingObject5.y >= height) {
		fallingObject5.y = 0;
		fallingObject5.x = random(width);
		fallingObject5.vel.y = random(6,12);
	}
if (fallingObject6.y >= height) {
		fallingObject6.y = 0;
		fallingObject6.x = random(width);
		fallingObject6.vel.y = random(7,12);
	}
	// move catcher
	if (kb.pressing("left")) {
		catcher.vel.x = -25;
	} else if (kb.pressing("right")) {
		catcher.vel.x = 25;
	} else {
		catcher.vel.x = 0;
	}

	// Stop catcher at edges of screen
	if (catcher.x < 728) {
		catcher.x = 728;
	} else if (catcher.x > 1300) {
		catcher.x = 1300;
	}

    if (fallingObject1.x < 728) {
		fallingObject1.x = 728;
	} else if (fallingObject1.x > 1300) {
		fallingObject1.x = 1300;
	}
  if (fallingObject.x < 728) {
		fallingObject.x = 728;
	} else if (fallingObject.x > 1300) {
		fallingObject.x = 1300;
	}
  if (fallingObject2.x < 728) {
		fallingObject2.x = 728;
	} else if (fallingObject2.x > 1300) {
		fallingObject2.x = 1300;
	}
  if (fallingObject3.x < 728) {
		fallingObject3.x = 728;
	} else if (fallingObject3.x > 1300) {
		fallingObject3.x = 1300;
	}
  if (fallingObject4.x < 728) {
		fallingObject4.x = 728;
	} else if (fallingObject4.x > 1300) {
		fallingObject4.x = 1300;
	}
  if (fallingObject5.x < 728) {
		fallingObject5.x = 728;
	} else if (fallingObject5.x > 1300) {
		fallingObject5.x = 1300;
	}
  if (fallingObject6.x < 728) {
		fallingObject6.x = 728;
	} else if (fallingObject6.x > 1300) {
		fallingObject6.x = 1300;
	}
	// if fallingObject collides with catcher, move back to random position at top
	if (fallingObject.collides(catcher)) {
		catchSound.play();
		fallingObject.y = 0;
		fallingObject.x = random(width);
		fallingObject.vel.y = random(6,12);
		fallingObject.direction = "down";
		score = score + 200;
    b_count = b_count + 1;
	}
if (fallingObject1.collides(catcher)) {
		bonus.play();
		fallingObject1.y = 0;
		fallingObject1.x = random(width);
		fallingObject1.vel.y = random(6,12);
		fallingObject1.direction = "down";
		score = score + 50;
    t_count = t_count + 1;
	}
if (fallingObject2.collides(catcher)) {
		bonus.play();
		fallingObject2.y = 0;
		fallingObject2.x = random(width);
		fallingObject2.vel.y = random(6,12);
		fallingObject2.direction = "down";
		score = score + 50;
    bf_count = bf_count + 1;
    all_count = all_count + 1;
	}
if (fallingObject3.collides(catcher)) {
		bonus.play();
		fallingObject3.y = 0;
		fallingObject3.x = random(width);
		fallingObject3.vel.y = random(7,12);
		fallingObject3.direction = "down";
		score = score + 50;
    c_count = c_count + 1;
    all_count = all_count + 1;
	}
if (fallingObject4.collides(catcher)) {
		bonus.play();
		fallingObject4.y = 0;
		fallingObject4.x = random(width);
		fallingObject4.vel.y = random(7,12);
		fallingObject4.direction = "down";
		score = score + 50;
    o_count = o_count + 1;
    s_count = s_count + 1;
	}
if (fallingObject5.collides(catcher)) {
		bonus.play();
		fallingObject5.y = 0;
		fallingObject5.x = random(width);
		fallingObject5.vel.y = random(7,12);
		fallingObject5.direction = "down";
		score = score + 50;
    ba_count = ba_count + 1;
    s_count = s_count + 1;
	}
if (fallingObject6.collides(catcher)) {
		bonus.play();
		fallingObject6.y = 0;
		fallingObject6.x = random(width);
		fallingObject6.vel.y = random(7,12);
		fallingObject6.direction = "down";
		score = score + 50;
    e_count = e_count + 1;
	}
	if (score < 0) {
		catcher.pos = { x: 600, y: -400};
		fallingObject.pos = { x: -100, y: -100 };
    fallingObject1.pos = { x: -100, y: -100 };
    fallingObject2.pos = { x: -100, y: -100 };
    fallingObject3.pos = { x: -100, y: -100 };
    fallingObject4.pos = { x: -100, y: -100 };
    fallingObject5.pos = { x: -100, y: -100 };
    fallingObject6.pos = { x: -100, y: -100 };
		fill(3,4,94);
		textSize(85);
		text("You Lost..", width/4 , height/2 );
    fill(2,62,138, fade);
    textSize(25);
    text("Refresh to try again.", width/2 - 230, height/2 + 30 );
    if (fade<0) fadeAmount=2; 
    if (fade>255) fadeAmount=-2; 
    fade += fadeAmount; 
	}
    if (time == 0){
      print('2');
      enterButton.pos = { x: -100, y: -100 };
      screen = 2;
    }
    //if (score > 3400){
      //print('3');
      //enterButton.pos = { x: -100, y: -100 };
      //screen = 3;
    //}
 }
//end of screen 1

    if (screen == 2) {
    image(bgImg2, 0, 0);
    bgImg.play();
    catcher.pos = { x: 600, y: -400};
		fallingObject.pos = { x: -100, y: -100 };
    fallingObject1.pos = { x: -100, y: -100 };
    fallingObject2.pos = { x: -100, y: -100 };
    fallingObject3.pos = { x: -100, y: -100 };
    fallingObject4.pos = { x: -100, y: -100 };
    fallingObject5.pos = { x: -100, y: -100 };
    fallingObject6.pos = { x: -100, y: -100 };
		fill("white");
		textSize(85);
		text("Cooking...", width/4 , height/2 );
    fill(255,255,255, fade);
    textSize(25);
    text("Please wait...", width/2 - 230, height/2 + 30 );
    if (fade<0) fadeAmount=2; 
    if (fade>255) fadeAmount=-2; 
    fade += fadeAmount; 
    fill("white");
    textSize(24);
    //text(`Time Left:\n${time2}s`, 290, 685);
    
    time2 = 59 - round(millis()/1000);
    if (time2 <= 0){
      print('2');
      nextButton.pos = { x:1200, y:690};
     
    }
    if (nextButton.mouse.presses()) {
      click.play();
      print('pressed');
      nextButton.pos = { x: -100, y: -100 };
      screen = 3;
    }
   }
  //^ end of screen 2
    if (screen == 3) {
     fallingObject.pos = { x: -100, y: -100 };
     fallingObject1.pos = { x: -100, y: -100 };
     fallingObject2.pos = { x: -100, y: -100 };
     fallingObject3.pos = { x: -100, y: -100 };
     fallingObject4.pos = { x: -100, y: -100 };
     fallingObject5.pos = { x: -100, y: -100 };
     fallingObject6.pos = { x: -100, y: -100 };
     image(bgImg3, 0, 0);
     textSize(40);
     fill("black");
     textSize(20);
     fill("black");
  
     text(`x${o_count}    x${t_count}    x${e_count}`,805, 685);
     text(`x${b_count}   x${ba_count}    x${all_count}`,805, 745);
     burgerButton.pos = { x:230, y:590};
     deliverButton.pos = { x: 1200, y:40 };
     if (burgerButton.mouse.presses()) {
      print('pressed');
      click.play();
     if (o_count > 0 && t_count > 0 && b_count > 0 && all_count > 0 ){
      aye.play();
      o_count -= 1;
      t_count -= 1;
      b_count -= 1;
      all_count -= 1;
      burger_count = burger_count + 1;
      burger.pos = { x: 640, y: 300 };
       }
      }
       text(`x${burger_count}`,240,170);
    if (deliverButton.mouse.presses()) {
      click.play();
      catchSound.play();
      print('pressed');
      deliverButton.pos = { x: -100, y: -100 };
      screen = 4;
      } 
    }
  //^ screen = 3;
   
    if (screen == 4) {
    t_burger = burger_count * 8; 
    o_total = s_count * 6;
    total_untaxed =  o_total + t_burger;
    tax = round(total_untaxed * .04785);
    total_taxed =  (o_total + t_burger) - tax;
    fallingObject.pos = { x: -100, y: -100 };
    fallingObject1.pos = { x: -100, y: -100 };
    fallingObject2.pos = { x: -100, y: -100 };
    fallingObject3.pos = { x: -100, y: -100 };
    fallingObject4.pos = { x: -100, y: -100 };
    fallingObject5.pos = { x: -100, y: -100 };
    fallingObject6.pos = { x: -100, y: -100 };
    burgerButton.pos = { x:-230, y:-590};
    image(end, 0, 0);
    end.play();
    image(coin, 680, 580);
    fill("black")
    text(`${burger_count} x $8 = $${t_burger}`,460,450);
    text(`${s_count} x $6 = $${o_total}`,460,510);
    text(`$${tax}`,300,570);
    text(`$${total_taxed}`,300,620); 
    coin.play();
    }
   //^ end of screen 4
}
//^ end of loop
/* FUNCTIONS */
function moveTarget() {
  burger.x = -325
  burger.y = -325;
}