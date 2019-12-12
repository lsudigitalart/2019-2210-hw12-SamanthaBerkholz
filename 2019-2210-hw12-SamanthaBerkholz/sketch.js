var rexoc;
var playTime = 0;
var loadTime = 0;
var amp, level;
var bgcolor;
var fft;
var playingNow = 0;
//let myFont;

var mouthShape;

var lMouth;
var oMouth;
var fvMouth;
var oooMouth;
var sMouth;
var eMouth;
var ahMouth;
var mMouth;
var thMouth;

function preload() {
  rexoc = loadSound("rexoc.mp3");
  lMouth = loadImage("L.png");
  oMouth = loadImage("oo.png");
  fvMouth = loadImage("fv.png");
  oooMouth = loadImage("ooo.png");
  sMouth = loadImage("sss.png");
  eMouth = loadImage("E.png");
  ahMouth = loadImage("ah.png");
  mMouth = loadImage("mm.png");
  thMouth = loadImage("th.png");
  //myFont = loadFont('assets/inconsolata.otf');
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  

  imageMode(CENTER);

  mouthShape = lMouth;
 
  //textFont(inconsolata);
  // textSize(width / 3);

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function mouseReleased() {
  if (rexoc.isLoaded()) {
      loadTime = millis();
      rexoc.play();
      playingNow = 1;
  }
}

function draw() {
  background(255);
  //text("CLICK TO START!",500,500);

  if(playingNow == 1) {
    playTime = millis() - loadTime;
    image(mouthShape, width/2, height/2);
    print(playTime);
  }

  if(playTime > 10 && playTime < 15899) {
    rect(100,100,windowWidth,windowHeight);
    textSize(40);
    text("Loving is Easy - Rex Orange County",400,500);
  }
  if(playTime > 15920 && playTime < 16100) {
    mouthShape = lMouth;
  }

  if(playTime > 16125 && playTime < 16190) {
    mouthShape = oMouth;
  }

  if(playTime > 16200 && playTime < 16225) {
    mouthShape = fvMouth;
  }

  if(playTime > 16325 && playTime < 16590) {
    mouthShape = sMouth;
  }

  if(playTime > 16650 && playTime < 16900) {
    mouthShape = eMouth;
  }

  if(playTime > 17050 && playTime < 17150) {
    mouthShape = sMouth;
  }


  if(playTime > 18060 && playTime < 18120) {
    mouthShape = oooMouth;
  }

  if(playTime > 18125 && playTime < 18160) {
    mouthShape = ahMouth;
  }

  if(playTime > 18175 && playTime < 18220) {
    mouthShape = mMouth;
  }

  if(playTime > 18225 && playTime < 18350) {
    mouthShape = eMouth;
  }

  if(playTime > 18425 && playTime < 18520) {
    mouthShape = fvMouth;
  }

  if(playTime > 18525 && playTime < 18820) {
    mouthShape = ahMouth;
  }

  if(playTime > 18825 && playTime < 18920) {
    mouthShape = sMouth;
  }

  if(playTime > 19005 && playTime < 19100) {
    mouthShape = ahMouth;
  }

  if(playTime > 19120 && playTime < 19920) {
    mouthShape = mMouth;
  }

  if(playTime > 20080 && playTime < 20130) {
    mouthShape = eMouth;
  }

  if(playTime > 20220 && playTime < 20450) {
    mouthShape = oooMouth;
  }

  if(playTime > 20520 && playTime < 20680) {
    mouthShape = sMouth;
  }

  if(playTime > 20750 && playTime < 20900) {
    mouthShape = oMouth;
  }

  if(playTime > 21080 && playTime < 21150) {
    mouthShape = mMouth;
  }

  if(playTime > 21220 && playTime < 21200) {
    mouthShape = eMouth;
  }

  if(playTime > 21220 && playTime < 21290) {
    mouthShape = sMouth;
  }

  if(playTime > 21320 && playTime < 21480) {
    mouthShape = oMouth;
  }

  if(playTime > 22000 && playTime < 22150) {
    mouthShape = ahMouth;
  }

  if(playTime > 22220 && playTime < 22300) {
    mouthShape = mMouth;
  }

  if(playTime > 22340 && playTime < 22400) {
    mouthShape = oMouth;
  }
  if(playTime > 22450 && playTime < 22500) {
    mouthShape = sMouth;
  }

  if(playTime > 22520 && playTime < 23100) {
    mouthShape = eMouth;
  }

  if(playTime > 23320 && playTime < 23500) {
    mouthShape = eMouth;
  }

  if(playTime > 24050 && playTime < 24100) {
    mouthShape = lMouth;
  }

  if(playTime > 24150 && playTime < 24200) {
    mouthShape = oMouth;
  }

  if(playTime > 24250 && playTime < 24320) {
    mouthShape = fvMouth;
  }

  if(playTime > 24350 && playTime < 24470) {
    mouthShape = eMouth;
  }

  if(playTime > 24550 && playTime < 24820) {
    mouthShape = sMouth;
  }

  if(playTime > 25050 && playTime < 25520) {
    mouthShape = eMouth;
  }

  if(playTime > 25550 && playTime < 25780) {
    mouthShape = sMouth;
  }

  if(playTime > 26020 && playTime < 26120) {
    mouthShape = eMouth;
  }

  if(playTime > 26150 && playTime < 26220) {
    mouthShape = fvMouth;
  }

  if(playTime > 26250 && playTime < 26300) {
    mouthShape = eMouth;
  }

  if(playTime > 26350 && playTime < 26400) {
    mouthShape = thMouth;
  }

  if(playTime > 26450 && playTime < 26550) {
    mouthShape = eMouth;
  }

  if(playTime > 27050 && playTime < 27100) {
    mouthShape = mMouth;
  }

  if(playTime > 27150 && playTime < 27280) {
    mouthShape = oooMouth;
  }

  if(playTime > 27300 && playTime < 27350) {
    mouthShape = fvMouth;
  }

  if(playTime > 27400 && playTime < 27450) {
    mouthShape = eMouth;
  }

  if(playTime > 28050 && playTime < 28100) {
    mouthShape = mMouth;
  }

  if(playTime > 28150 && playTime < 24200) {
    mouthShape = lMouth;
  }

  if(playTime > 28250 && playTime < 28300) {
    mouthShape = eMouth;
  }

  if(playTime > 28450 && playTime < 28500) {
    mouthShape = oMouth;
  }

  if(playTime > 28550 && playTime < 28600) {
    mouthShape = mMouth;
  }

  if(playTime > 28650 && playTime < 28700) {
    mouthShape = sMouth;
  }

  if(playTime > 28750 && playTime < 28800) {
    mouthShape = eMouth;
  }

  if(playTime > 28850 && playTime < 28900) {
    mouthShape = mMouth;
  }

  if(playTime > 29050 && playTime < 29150) {
    mouthShape = ahMouth;
  }

  if(playTime > 29200 && playTime < 29300) {
    mouthShape = sMouth;
  }

  if(playTime > 29400 && playTime < 29500) {
    mouthShape = eMouth;
  }

  if(playTime > 29550 && playTime < 29650) {
    mouthShape = lMouth;
  }

  if(playTime > 29700 && playTime < 29800) {
    mouthShape = eMouth;
  }

  if(playTime > 29850 && playTime < 29920) {
    mouthShape = mMouth;
  }

  if(playTime > 30000 && playTime < 30150) {
    mouthShape = thMouth;
  }
 
  if(playTime > 30200 && playTime < 30300) {
    mouthShape = eMouth;
  }
  
  if(playTime > 30350 && playTime < 30400) {
    mouthShape = fvMouth;
  }

  if(playTime > 30450 && playTime < 30550) {
    mouthShape = oMouth;
  }

  if(playTime > 31000 && playTime < 31150) {
    mouthShape = mMouth;
  }

  if(playTime > 31200 && playTime < 31300) {
    mouthShape = eMouth;
  }

  if(playTime > 32100 && playTime < 32180) {
    mouthShape = lMouth;
  }

  if(playTime > 32200 && playTime < 32300) {
    mouthShape = eMouth;
  }

  if(playTime > 32350 && playTime < 32400) {
    mouthShape = sMouth;
  }

  if(playTime > 32450 && playTime < 32500) {
    mouthShape = eMouth;
  }

  if(playTime > 32550 && playTime < 32600) {
    mouthShape = lMouth;
  }

  if(playTime > 32990 && playTime < 33000) {
    mouthShape = oMouth;
  }

  if(playTime > 33050 && playTime < 33150) {
    mouthShape = lMouth;
  }

  if(playTime > 33800 && playTime < 33950) {
    mouthShape = oMouth;
  }

  if(playTime > 34000 && playTime < 34100) {
    mouthShape = eMouth;
  }

  if(playTime > 34150 && playTime < 34200) {
    mouthShape = oooMouth;
  }

  if(playTime > 34250 && playTime < 34300) {
    mouthShape = eMouth;
  }

  if(playTime > 34350 && playTime < 34450) {
    mouthShape = ahMouth;
  }

  if(playTime > 34500 && playTime < 34550) {
    mouthShape = eMouth;
  }

  if(playTime > 34600 && playTime < 34700) {
    mouthShape = fvMouth;
  }

  if(playTime > 34750 && playTime < 34800) {
    mouthShape = eMouth;
  }

  if(playTime > 34850 && playTime < 34900) {
    mouthShape = mMouth;
  }

  if(playTime > 35000 && playTime < 35100) {
    mouthShape = ahMouth;
  }

  if(playTime > 35150 && playTime < 34200) {
    mouthShape = eMouth;
  }

  if(playTime > 35250 && playTime < 35300) {
    mouthShape = sMouth;
  }

  if(playTime > 35350 && playTime < 35400) {
    mouthShape = eMouth;
  }

  if(playTime > 35450 && playTime < 35500) {
    mouthShape = sMouth;
  }

  if(playTime > 34000 && playTime < 34100) {
    mouthShape = eMouth;
  }

  if(playTime > 37000 && playTime < 37100) {
    mouthShape = ahMouth;
  }

  if(playTime > 37150 && playTime < 37220) {
    mouthShape = eMouth;
  }

  if(playTime > 37300 && playTime < 34350) {
    mouthShape = sMouth;
  }

  if(playTime > 37400 && playTime < 37450) {
    mouthShape = eMouth;
  }

  if(playTime > 37500 && playTime < 37550) {
    mouthShape = sMouth;
  }

  if(playTime > 37600 && playTime < 37700) {
    mouthShape = ahMouth;
  }

  if(playTime > 37800 && playTime < 37830) {
    mouthShape = eMouth;
  }

  if(playTime > 38000 && playTime < 38100) {
    mouthShape = fvMouth;
  }

  if(playTime > 38150 && playTime < 38200) {
    mouthShape = oMouth;
  }

  if(playTime > 38250 && playTime < 38330) {
    mouthShape = eMouth;
  }

  if(playTime > 38350 && playTime < 38400) {
    mouthShape = fvMouth;
  }


  if(playTime > 38800 && playTime < 38850) {
    mouthShape = sMouth;
  }

  if(playTime > 38900 && playTime < 38950) {
    mouthShape = eMouth;
  }

  if(playTime > 39000 && playTime < 39100) {
    mouthShape = sMouth;
  }

  if(playTime > 39150 && playTime < 39200) {
    mouthShape = oooMouth;
  }

  if(playTime > 39250 && playTime < 30300) {
    mouthShape = fvMouth;
  }

  if(playTime > 39350 && playTime < 39420) {
    mouthShape = eMouth;
  }

  if(playTime > 39480 && playTime < 39550) {
    mouthShape = sMouth;
  }

  if(playTime > 41000 && playTime < 41150) {
    mouthShape = eMouth;
  }

  if(playTime > 41200 && playTime < 41280) {
    mouthShape = oMouth;
  }

  if(playTime > 41300 && playTime < 41350) {
    mouthShape = ahMouth;
  }

  if(playTime > 41400 && playTime < 41450) {
    mouthShape = sMouth;
  }

  if(playTime > 41500 && playTime < 41550) {
    mouthShape = ahMouth;
  }

  if(playTime > 41600 && playTime < 41680) {
    mouthShape = lMouth;
  }

  if(playTime > 42000 && playTime < 42080) {
    mouthShape = oMouth;
  }

  if(playTime > 42200 && playTime < 42250) {
    mouthShape = sMouth;
  }

  if(playTime > 42300 && playTime < 42350) {
    mouthShape = mMouth;
  }

  if(playTime > 42400 && playTime < 42450) {
    mouthShape = eMouth;
  }

  if(playTime > 42500 && playTime < 42550) {
    mouthShape = oMouth;
  }

  if(playTime > 42600 && playTime < 42680) {
    mouthShape = sMouth;
  }

  if(playTime > 43000 && playTime < 43080) {
    mouthShape = ahMouth;
  }

  if(playTime > 43100 && playTime < 43150) {
    mouthShape = lMouth;
  }

  if(playTime > 43200 && playTime < 43250) {
    mouthShape = mMouth;
  }

  if(playTime > 43300 && playTime < 43350) {
    mouthShape = oMouth;
  }

  if(playTime > 43400 && playTime < 43450) {
    mouthShape = sMouth;
  }

  if(playTime > 43500 && playTime < 43550) {
    mouthShape = lMouth;
  }

  if(playTime > 43600 && playTime < 43950) {
    mouthShape = ahMouth;
  }

  if(playTime > 44000 && playTime < 44100) {
    mouthShape = oooMouth;
  }

  if(playTime > 44150 && playTime < 44200) {
    mouthShape = mMouth;
  }

  if(playTime > 44250 && playTime < 44300) {
    mouthShape = eMouth;
  }

  if(playTime > 44350 && playTime < 44000) {
    mouthShape = ahMouth;
  }

  if(playTime > 44080 && playTime < 44150) {
    mouthShape = lMouth;
  }

  if(playTime > 44200 && playTime < 44350) {
    mouthShape = oMouth;
  }

  if(playTime > 44400 && playTime < 44550) {
    mouthShape = sMouth;
  }

  if(playTime > 45000 && playTime < 45050) {
    mouthShape = lMouth;
  }

  if(playTime > 45100 && playTime < 45150) {
    mouthShape = sMouth;
  }

  if(playTime > 45200 && playTime < 45250) {
    mouthShape = lMouth;
  }

  if(playTime > 45300 && playTime < 45350) {
    mouthShape = mMouth;
  }

  if(playTime > 45400 && playTime < 45450) {
    mouthShape = lMouth;
  }

  if(playTime > 45500 && playTime < 46100) {
    mouthShape = ahMouth;
  }

  if(playTime > 46200 && playTime < 46300) {
    mouthShape = eMouth;
  }

  if(playTime > 46350 && playTime < 46420) {
    mouthShape = ahMouth;
  }

  if(playTime > 47000 && playTime < 47220) {
    mouthShape = mMouth;
  }

  if(playTime > 47250 && playTime < 47300) {
    mouthShape = eMouth;
  }

  if(playTime > 47400 && playTime < 48050) {
    mouthShape = sMouth;
  }

  if(playTime > 49000 && playTime < 49150) {
    mouthShape = oMouth;
  }

  if(playTime > 49200 && playTime < 49250) {
    mouthShape = mMouth;
  }

  if(playTime > 49300 && playTime < 49350) {
    mouthShape = sMouth;
  }

  if(playTime > 49400 && playTime < 49850) {
    mouthShape = eMouth;
  }

  if(playTime > 50000 && playTime < 50150) {
    mouthShape = mMouth;
  }

  if(playTime > 51000 && playTime < 51150) {
    mouthShape = ahMouth;
  }

  if(playTime > 51180 && playTime < 51220) {
    mouthShape = sMouth;
  }

  if(playTime > 51300 && playTime < 51450) {
    mouthShape = eMouth;
  }

  if(playTime > 51500 && playTime < 52100) {
    mouthShape = mMouth;
  }

  if(playTime > 52130 && playTime < 52190) {
    mouthShape = sMouth;
  }

  if(playTime > 52205 && playTime < 52299) {
    mouthShape = oMouth;
  }

  if(playTime > 52350 && playTime < 52500) {
    mouthShape = lMouth;
  }

  if(playTime > 52650 && playTime < 52800) {
    mouthShape = oMouth;
  }

  if(playTime > 53000 && playTime < 53090) {
    mouthShape = fvMouth;
  }
  
  if(playTime > 53100 && playTime < 53150) {
    mouthShape = eMouth;
  }

  if(playTime > 53160 && playTime < 53200) {
    mouthShape = sMouth;
  }

  if(playTime > 53220 && playTime < 53350) {
    mouthShape = eMouth;
  }

  if(playTime > 53400 && playTime < 54050) {
    mouthShape = sMouth;
  }

  if(playTime > 54500 && playTime < 55000) {
    mouthShape = oooMouth;
  }

  if(playTime > 55000 && playTime < 55050) {
    mouthShape = ahMouth;
  }

  if(playTime > 55100 && playTime < 55150) {
    mouthShape = sMouth;
  }

  if(playTime > 55200 && playTime < 55280) {
    mouthShape = mMouth;
  }

  if(playTime > 55300 && playTime < 55350) {
    mouthShape = eMouth;
  }

  if(playTime > 55400 && playTime < 55450) {
    mouthShape = fvMouth;
  }

  if(playTime > 55500 && playTime < 55650) {
    mouthShape = ahMouth;
  }

  if(playTime > 55700 && playTime < 55750) {
    mouthShape = sMouth;
  }

  if(playTime > 55800 && playTime < 55850) {
    mouthShape = ahMouth;
  }

  if(playTime > 55900 && playTime < 56150) {
    mouthShape = mMouth;
  }

  if(playTime > 56800 && playTime < 5690) {
    mouthShape = eMouth;
  }

  if(playTime > 57050 && playTime < 57100) {
    mouthShape = sMouth;
  }

  if(playTime > 57150 && playTime < 57200) {
    mouthShape = oooMouth;
  }

  if(playTime > 57220 && playTime < 57290) {
    mouthShape = sMouth;
  }

  if(playTime > 57300 && playTime < 57350) {
    mouthShape = mMouth;
  }

  if(playTime > 57400 && playTime < 57550) {
    mouthShape = eMouth;
  }

  if(playTime > 57800 && playTime < 57950) {
    mouthShape = sMouth;
  }

  if(playTime > 58000 && playTime < 58250) {
    mouthShape = oMouth;
  }

  if(playTime > 58300 && playTime < 58450) {
    mouthShape = ahMouth;
  }

  if(playTime > 58500 && playTime < 59050) {
    mouthShape = sMouth;
  }

  if(playTime > 59000 && playTime < 59200) {
    mouthShape = oooMouth;
  }

  if(playTime > 59250 && playTime < 59350) {
    mouthShape = sMouth;
  }

  if(playTime > 59400 && playTime < 59950) {
    mouthShape = eMouth;
  }

  if(playTime > 60050 && playTime < 60100) {
    mouthShape = ahMouth;
  }

  if(playTime > 61010 && playTime < 61080) {
    mouthShape = lMouth;
  }

  if(playTime > 61100 && playTime < 61150) {
    mouthShape = oMouth;
  }

  if(playTime > 61200 && playTime < 61250) {
    mouthShape = fvMouth;
  }

  if(playTime > 61300 && playTime < 61350) {
    mouthShape = eMouth;
  }

  if(playTime > 61400 && playTime < 61500) {
    mouthShape = sMouth;
  }

  if(playTime > 61550 && playTime < 61800) {
    mouthShape = eMouth;
  }

  if(playTime > 62050 && playTime < 62100) {
    mouthShape = sMouth;
  }

  if(playTime > 62200 && playTime < 62300) {
    mouthShape = eMouth;
  }

  if(playTime > 62850 && playTime < 62900) {
    mouthShape = mMouth;
  }

  if(playTime > 62950 && playTime < 63000) {
    mouthShape = ahMouth;
  }

  if(playTime > 63010 && playTime < 63080) {
    mouthShape = eMouth;
  }

  if(playTime > 63100 && playTime < 63150) {
    mouthShape = fvMouth;
  }

  if(playTime > 63160 && playTime < 63190) {
    mouthShape = thMouth;
  }

  if(playTime > 63200 && playTime < 63290) {
    mouthShape = eMouth;
  }

  if(playTime > 63310 && playTime < 63480) {
    mouthShape = sMouth;
  }

  if(playTime > 63510 && playTime < 63680) {
    mouthShape = mMouth;
  }

  if(playTime > 64000 && playTime < 64080) {
    mouthShape = eMouth;
  }

  if(playTime > 64100 && playTime < 64150) {
    mouthShape = fvMouth;
  }

  if(playTime > 64160 && playTime < 64199) {
    mouthShape = eMouth;
  }

  if(playTime > 64200 && playTime < 64280) {
    mouthShape = sMouth;
  }

  if(playTime > 65010 && playTime < 65090) {
    mouthShape = mMouth;
  }

  if(playTime > 65090 && playTime < 65140) {
    mouthShape = lMouth;
  }

  if(playTime > 65150 && playTime < 65200) {
    mouthShape = eMouth;
  }

  if(playTime > 65210 && playTime < 65280) {
    mouthShape = sMouth;
  }

  if(playTime > 65310 && playTime < 65380) {
    mouthShape = oMouth;
  }

  if(playTime > 65410 && playTime < 65450) {
    mouthShape = sMouth;
  }

  if(playTime > 65460 && playTime < 65500) {
    mouthShape = eMouth;
  }

  if(playTime > 65510 && playTime < 65580) {
    mouthShape = ahMouth;
  }

  if(playTime > 66010 && playTime < 66080) {
    mouthShape = sMouth;
  }

  if(playTime > 66100 && playTime < 66150) {
    mouthShape = eMouth;
  }

  if(playTime > 66230 && playTime < 66280) {
    mouthShape = lMouth;
  }

  if(playTime > 66310 && playTime < 63480) {
    mouthShape = eMouth;
  }

  if(playTime > 66510 && playTime < 66590) {
    mouthShape = sMouth;
  }

  if(playTime > 67000 && playTime < 67080) {
    mouthShape = thMouth;
  }

  if(playTime > 67100 && playTime < 67180) {
    mouthShape = eMouth;
  }

  if(playTime > 67210 && playTime < 67280) {
    mouthShape = sMouth;
  }

  if(playTime > 67310 && playTime < 67380) {
    mouthShape = fvMouth;
  }

  if(playTime > 67410 && playTime < 67680) {
    mouthShape = oMouth;
  }

  if(playTime > 67710 && playTime < 67880) {
    mouthShape = sMouth;
  }

  if(playTime > 68010 && playTime < 68090) {
    mouthShape = mMouth;
  }

  if(playTime > 68100 && playTime < 68180) {
    mouthShape = eMouth;
  }

  if(playTime > 69010 && playTime < 69080) {
    mouthShape = oooMouth;   
  }






 




  

  


 

 
















































  



  




















  


  








  // level = amp.getLevel();
  // // print(level);

  // mappedColor = map(level, 0, 1, 0, 255);

  // cSize = map(level, 0, 1, 0, width);

  // let lerping = lerpColor(color("red"), color("blue"), level)
  // fill(lerping);


  /*/ strokeWidth(10);
  if (playTime > 6000) {
    for (var i = 0; i < width; i++) {
      // grad1 = lerpColor(color("purple"), color("yellow"), map(i, 0, width, 0, 1));
      grad1 = lerpColor(color("green"), color("black"), level);
      stroke(grad1);
      line(i, 0, i, height);
    }
  }*/

  // let time = millis();
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  // text('Loving is Easy', 900, 600);



  // var spectrum = fft.analyze();
  // var trebleVol = fft.getEnergy("treble");
  // var midVol = fft.getEnergy("mid");
  // var bassVol = fft.getEnergy("bass");


  // fill(255,140,0);
  // circle(100,100, trebleVol);
  // fill(255,69,0);
  // circle(850,150, midVol);
  // fill(255,165,0);
  // circle(400,600, bassVol);


}