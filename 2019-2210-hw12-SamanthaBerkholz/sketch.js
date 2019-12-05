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
  background(0);

  if(playingNow == 1) {
    playTime = millis() - loadTime;
    image(mouthShape, width/2, height/2);
    print(playTime);
  }

  if(playTime > 16120 && playTime < 16200) {
    mouthShape = lMouth;
  }

  if(playTime > 16225 && playTime < 16420) {
    mouthShape = oMouth;
  }

  if(playTime > 16475 && playTime < 16525) {
    mouthShape = fvMouth;
  }

  if(playTime > 16725 && playTime < 17800) {
    mouthShape = sMouth;
  }

  if(playTime > 17850 && playTime < 17900) {
    mouthShape = eMouth;
  }

  if(playTime > 18025 && playTime < 18300) {
    mouthShape = sMouth;
  }

  if(playTime > 18425 && playTime < 18600) {
    mouthShape = oooMouth;
  }

  if(playTime > 18725 && playTime < 18850) {
    mouthShape = ahMouth;
  }

  if(playTime > 19025 && playTime < 19150) {
    mouthShape = mMouth;
  }

  if(playTime > 19225 && playTime < 19350) {
    mouthShape = eMouth;
  }

  if(playTime > 19425 && playTime < 19520) {
    mouthShape = fvMouth;
  }

  if(playTime > 19625 && playTime < 19720) {
    mouthShape = ahMouth;
  }

  if(playTime > 19825 && playTime < 19920) {
    mouthShape = sMouth;
  }

  if(playTime > 19995 && playTime < 20000) {
    mouthShape = ahMouth;
  }

  if(playTime > 20020 && playTime < 20120) {
    mouthShape = mMouth;
  }

  if(playTime > 20280 && playTime < 20320) {
    mouthShape = eMouth;
  }

  if(playTime > 20380 && playTime < 20450) {
    mouthShape = oooMouth;
  }

  if(playTime > 20580 && playTime < 20620) {
    mouthShape = sMouth;
  }

  if(playTime > 20680 && playTime < 20700) {
    mouthShape = mMouth;
  }

  if(playTime > 20720 && playTime < 20800) {
    mouthShape = eMouth;
  }

  if(playTime > 20820 && playTime < 20880) {
    mouthShape = sMouth;
  }

  if(playTime > 20920 && playTime < 20980) {
    mouthShape = oMouth;
  }

  if(playTime > 21000 && playTime < 21150) {
    mouthShape = ahMouth;
  }

  if(playTime > 21220 && playTime < 21300) {
    mouthShape = oMouth;
  }

  if(playTime > 21340 && playTime < 21400) {
    mouthShape = sMouth;
  }

  if(playTime > 21520 && playTime < 21700) {
    mouthShape = eMouth;
  }

  if(playTime > 21820 && playTime < 21900) {
    mouthShape = sMouth;
  }

  if(playTime > 21920 && playTime < 21980) {
    mouthShape = oMouth;
  }

  if(playTime > 22020 && playTime < 22160) {
    mouthShape = ahMouth;
  }

  if(playTime > 22220 && playTime < 22280) {
    mouthShape = sMouth;
  }

  if(playTime > 22320 && playTime < 22390) {
    mouthShape = oooMouth;
  }

  if(playTime > 22420 && playTime < 22480) {
    mouthShape = sMouth;
  }

  if(playTime > 22520 && playTime < 22600) {
    mouthShape = eMouth;
  }

  if(playTime > 22720 && playTime < 20800) {
    mouthShape = oMouth;
  }

  if(playTime > 22920 && playTime < 23000) {
    mouthShape = sMouth;
  }

  if(playTime > 23020 && playTime < 23180) {
    mouthShape = eMouth;
  }

  if(playTime > 24020 && playTime < 24120) {
    mouthShape = ahMouth;
  }

  if(playTime > 24620 && playTime < 24740) {
    mouthShape = lMouth;
  }

  if(playTime > 24780 && playTime < 24820) {
    mouthShape = oMouth;
  }

  if(playTime > 24920 && playTime < 25020) {
    mouthShape = fvMouth;
  }

  if(playTime > 25120 && playTime < 25220) {
    mouthShape = eMouth;
  }

  if(playTime > 25320 && playTime < 25420) {
    mouthShape = sMouth;
  }

  if(playTime > 25520 && playTime < 25620) {
    mouthShape = eMouth;
  }

  if(playTime > 25720 && playTime < 25840) {
    mouthShape = sMouth;
  }

  if(playTime > 25920 && playTime < 26020) {
    mouthShape = eMouth;
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