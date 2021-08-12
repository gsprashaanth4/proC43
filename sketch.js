const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var INTRO = 11;
var NINTRO = 22;
var QONE = 1;
var QTWO = 2;
var QTHREE = 3;
var QFOUR = 4;
var END = 100
var gameState = NINTRO;

var pf, pfimg;
var pm, pmimg;
var pc, pcimg;

var spea = 10;
var timer = 10;

var playerName;

var answer1 = "";
var answer2 = "";

var win1 = 0;
var win2 = 0;
var win3 = 0;
var win4 = 0;

var score = 0;
var highScore = 0;

var arrow;
var arrowimg;

var sw1 = 0;
var spy1 = 0;
var sw2 = 0;
var spy2 = 0;

var svq2 = 0;
var svq4 = 0;

var sTime = 0;

function preload()
{
  pfimg = loadImage("paroahImgbg11r.png");
  pmimg = loadImage("paroahImgbg12r.png");
  pcimg = loadImage("paroahImgbg18r.png");
  welcome = loadSound("welcom.mp3");
  q1 = loadSound("q1.mp3");
  q2 = loadSound("q2.mp3");
  q3 = loadSound("q3.mp3");
  q4 = loadSound("q4.mp3");
  g1 = loadSound("rocking.mp3");
  g2 = loadSound("goodJ.mp3");
  g3 = loadSound("excellent.mp3");
  b1 = loadSound("hopeBest.mp3");
  b2 = loadSound("dontLH.mp3");
  b3 = loadSound("canDoBetter.mp3");
  st1 = loadSound("star1.mp3");
  st2 = loadSound("star2.mp3");
  st3 = loadSound("star3.mp3");
  st4 = loadSound("star4.mp3");
  st0 = loadSound("star0.mp3");
  arrowimg = loadImage("arrow111r.png");
}

function setup()
{
  canvas = createCanvas(714,714);

  engine = Engine.create();
  world = engine.world;  

  mi = createSprite(714/2,714/2-30,40,30);
  mi.shapeColor = "black";

  selec1 = createSprite(356,620,60,30);
  selec1.shapeColor = "green";

  selec2 = createSprite(356,620,60,30);
  selec2.shapeColor = "green";

  pf = createSprite(714/2,714/2);
  pf.addImage(pfimg);
  pf.scale = 0.5;

  pm = createSprite(714/2,714/2);
  pm.addImage(pmimg);
  pm.scale = 0.5;

  pc = createSprite(714/2,714/2);
  pc.addImage(pcimg);
  pc.scale = 0.5;

  nameI = createInput('');

  fq1 = createInput('');
  fq3 = createInput('');

  op21 = createButton('Yenisei');
  op22 = createButton('Amazon');
  op23 = createButton('Nile');
  op24 = createButton('Mississippi');

  op41 = createButton('Isis');
  op42 = createButton('Bastet');
  op43 = createButton('Hathor');
  op44 = createButton('Osiris');

  nxt = createButton('next');
  endd = createButton('finish');
  backk = createButton('back');
  restartt = createButton('restart');
}

function draw()
{
  background("#FEE700");
  Engine.update(engine);
  drawSprites();

  selec1.width = sw1;
  selec1.y = spy1;

  selec2.width = sw2;
  selec2.y = spy2;

  //the following 'if' conditions are to specify the usability of the created buttons in each of the gameStates.

  if(gameState === END)
  {
    restartt.show();
  }else
  {
    restartt.hide();
  }

  if(gameState === INTRO || gameState === QONE || gameState === QTWO || gameState === QTHREE || gameState === QFOUR || gameState === END)
  {
    pm.visible = true;
    pf.visible = true;
    pc.visible = true;
    mi.visible = true;
  }else
  {
    pm.visible = false;
    pf.visible = false;
    pc.visible = false;
    mi.visible = false;
  }

  if(gameState === QTWO || gameState === QTHREE || gameState === QFOUR)
  {
    backk.show();
  }else
  {
    backk.hide();
  }

  if(gameState === NINTRO)
  {
    nameI.show();
  }else
  {
    nameI.hide();
  }

  if(gameState === QONE)
  {
    fq1.show();
  }else
  {
    fq1.hide();
  }

  if(gameState === QTWO)
  {
    op21.show();
    op22.show();
    op23.show();
    op24.show();
  }else
  {
    op21.hide();
    op22.hide();
    op23.hide();
    op24.hide();
  }

  if(gameState === QTHREE)
  {
    fq3.show();
  }else
  {
    fq3.hide();
  }

  if(gameState === QFOUR)
  {
    op41.show();
    op42.show();
    op43.show();
    op44.show();
  }else
  {
    op41.hide();
    op42.hide();
    op43.hide();
    op44.hide();
  }

  if(gameState === QFOUR)
  {
    endd.show();
  }else
  {
    endd.hide();
  }

  nameI.position(714/2+190, 714/2);
  nxt.position(900,700);
  endd.position(900,700);
  backk.position(320,700);
  fq1.position(630,625);
  fq3.position(630,625);

  op21.position(601,625);
  op22.position(598,650);
  op23.position(611,675);
  op24.position(591,700);

  op41.position(612,625);
  op42.position(604,650);
  op43.position(603,675);
  op44.position(606,700);

  restartt.position(603,675);

  //the following main 'if' conditions are to specify the main proggramme needed to take place in the respective gameStates.


  if(gameState === NINTRO)
  {
    selec1.visible = false;
    selec2.visible = false;

    push();
    textSize(25);
    fill("black");
    textFont("Courier new");
    text("enter you're name below",714/2-160, 300)
    pop();

    playerName = nameI.value();

    nxt.mousePressed(()=>{
      nxt.hide();
      gameState = INTRO;
      spea = 10;
      pm.velocityY = 3;
      timer = 10;
    });
  }


  if(gameState === INTRO)
  {
    selec1.visible = false;
    selec2.visible = false;

    push();
    textSize(21);
    fill("black");
    textFont("Courier new");
    text("welcome " + nameI.value(), 30, 30);
    pop();

    if(frameCount % 12 === 0 && spea > -1)
    {
      spea--;
    }

    if(timer > 9)
    {    
      welcome.play();
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    if(timer === 0)
    {
      nxt.show();
    }

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("Hello I'm Tutankhamen, welcome to the Egyptian QUIZ",110,600);
    pop();

    speak();

    push();
    stroke("black");
    strokeWeight(1);
    line(pm.x-19,pm.y-30,pf.x-19,pf.y-30);
    pop();
  
    push();
    stroke("black");
    strokeWeight(1);
    line(pm.x+19,pm.y-30,pf.x+19,pf.y-30);
    pop();

    nxt.mousePressed(()=>{
      gameState = QONE;
      spea = 10;
      pm.velocityY = 3;
      timer = 10;
      welcome.stop();
    });
  }


  if(gameState === QONE)
  {
    selec1.visible = false;
    selec2.visible = false;
    speak();
    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("Which crop grown by Egyptians laid foundation for",120,100);
    pop();

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("the modern day paper?",260,120)
    pop();

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("enter your answer:",180,600)
    pop();

    if(fq1.value() !== "")
    {
      nxt.show();
    }else
    {
      nxt.hide();
    }

    if(frameCount % 16 === 0 && spea > -1)
    {
      spea--;
    }

    if(timer > 9)
    {
      q1.play();
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    nxt.mousePressed(()=>{
  
      if(fq1.value() === "papyrus" || fq1.value() === "Papyrus" || fq1.value() === "PAPYRUS")
      {
        win1 = 1;
      }else
      {
        win1 = 0;
      }

      gameState = QTWO;
      timer = 10;
      pm.velocityY = 3;
      spea = 10;
      q1.stop();
    });
  }


  if(gameState === QTWO)
  {
    speak();
    nxt.hide();
    selec2.visible = false;

    if(frameCount % 20 === 0 && spea > -1)
    {
      spea--;
    }

    if(timer > 9)
    {
      q2.play();
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("Which is the river that provided Egypt with vital",130,100);
    pop();

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("resources like new fertile soil and water",170,120);
    pop();

    if(svq2 === 1)
    {
      selec1.visible = true;
    }else
    {
      selec1.visible = false;
    }

    backk.mousePressed(()=>{
      gameState === QONE;
    });

    /**/op21.mousePressed(()=>{
      win2 = 0;
      svq2 = 1;
      sw1 = 65;
      spy1 = 595;
      gameState = QTHREE;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
    });

    /**/op22.mousePressed(()=>{
      win2 = 0;
      svq2 = 1;
      sw1 = 75;
      spy1 = 620;
      gameState = QTHREE;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
    });

    /**/op23.mousePressed(()=>{
      win2 = 1;
      svq2 = 1;
      sw1 = 50;
      spy1 = 645;
      gameState = QTHREE;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
    });

    /**/op24.mousePressed(()=>{
      win2 = 0;
      svq2 = 1;
      sw1 = 90;
      spy1 = 670;
      gameState = QTHREE;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
    });

    backk.mousePressed(()=>{
      gameState = QONE
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
      selec1.visible = false;
    });
  }


  if(gameState === QTHREE)
  {
    speak();
    selec1.visible = false;
    selec2.visible = false;

    if(frameCount % 12 === 0 && spea > -1)
    {
      spea--;
    }

    if(timer > 9)
    {
      q3.play();
    }

    if(fq3.value() !== "")
    {
      nxt.show();
    }else
    {
      nxt.hide();
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("Name the place where the largest Egyptian pyramid is present.",70,100);
    pop();

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("enter your answer:",180,600);
    pop();

    nxt.mousePressed(()=>{
      if(fq3.value() === "Giza" || fq3.value() === "GIZA" || fq3.value() === "giza")
      {
        win3 = 1;
      }else
      {
        win3 = 0;
      }
      gameState = QFOUR;
      timer = 10;
      spea = 10;
      q3.stop();
      pm.velocityY = 3;
    });

    backk.mousePressed(()=>{
      gameState = QTWO;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q3.stop();
    });
  }


  if(gameState === QFOUR)
  {
    speak();
    nxt.hide();
    selec1.visible = false;

    if(frameCount % 14 === 0 && spea > -1)
    {
      spea--;
    }

    if(timer > 9)
    {
      q4.play();
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    push();
    textSize(16);
    fill("black");
    textFont("Courier new");
    text("Which Egyptian God/Goddes is associated with cats?",120,100);
    pop();

    if(svq4 === 1)
    {
      selec2.visible = true;
    }else
    {
      selec2.visible = false;
    }

    /**/op41.mousePressed(()=>{
      svq4 = 1;
      win4 = 0;
      sw2 = 45;
      spy2 = 594;
    });

    /**/op42.mousePressed(()=>{
      svq4 = 1;
      win4 = 1;
      sw2 = 60;
      spy2 = 620;
    });

    /**/op43.mousePressed(()=>{
      svq4 = 1;
      win4 = 0;
      sw2 = 65;
      spy2 = 645;
    });

    /**/op44.mousePressed(()=>{
      svq4 = 1;
      win4 = 0;
      sw2 = 60;
      spy2 = 670;
    });

    /**/endd.mousePressed(()=>{
      gameState = END;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q2.stop();
    });

    /**/backk.mousePressed(()=>{
      gameState = QTHREE;
      timer = 10;
      spea = 10;
      pm.velocityY = 3;
      q4.stop();
    });
  }

  if(gameState === END)
  {
    q4.stop();
    score = (win1+win2+win3+win4)*10;
    selec2.visible = false;
    selec1.visible = false;

    push();
    textSize(20);
    textFont("Courier new");
    fill("black");
    text("Score: "+score, 30,40);
    text("High-score: "+highScore, 30,70);
    text("correct answers: "+(win1+win2+win3+win4)+"/4" , 30, 100);
    pop();
    
    push();
    textSize(18);
    textFont("Courier new");
    fill("black");
    text("answers:", 575,40);
    text("1. Papyrus",575,70);
    text("2. Nile",575,100);
    text("3. Giza",575,130);
    text("4. Bastet",575,160);
    pop();

    if(score > highScore)
    {
      highScore = score;
    }else
    {
      highScore = highScore;
    }

    restartt.mousePressed(()=>{
      reset();
    });

    speak();

    if(timer > 9)
    {
      if(win1+win2+win3+win4 === 0)
      {
        st0.play();
        sTime = 11;
      }

      if(win1+win2+win3+win4 === 1)
      {
        st1.play();
        sTime = 10;
      }
      
      if(win1+win2+win3+win4 === 2)
      {
        st2.play();
        sTime = 8;
      }

      if(win1+win2+win3+win4 === 3)
      {
        st3.play();
        sTime = 8;
      }

      if(win1+win2+win3+win4 === 4)
      {
        st4.play();
        sTime = 12;
      }
    }
    
    if(timer > 0 && frameCount % 1 === 0)
    {
      timer--;
    }

    if(frameCount % sTime === 0 && spea > -1)
    {
      spea--;
    }
  }
}

function speak()
{
  if(pm.y > 714/2 + 8 && spea>0 && spea!==0)
  {
    pm.velocityY = -3;
  }

  if(pm.y < 714/2 && spea>0 && spea!==0)
  {
    pm.velocityY = 3;
  }

  if(spea === 0)
  {
    pm.y = 714/2;
    pm.velocityY = 0;
  }
}

function reset()
{
  spea = 10;
  timer = 10;
  gameState = QONE;
  win1 = 0;
  win2 = 0;
  win3 = 0;
  win4 = 0;
  fq1.value("");
  fq3.value("");
  pm.velocityY = 3;
  selec1.visible = false;
  selec2.visible = false;
  svq2 = 0;
  svq4 = 0;
}
