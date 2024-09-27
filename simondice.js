let rojo;   
let verde;
let azul;
let naranja;
let arr = [];
let hdsp = [];
let num;
let img;
let aud;
let int = 1;
let pos = 0;
let puntos = 0;

function preload(){ 
  img = loadImage('elneropiter.jpg');
  aud = loadSound("scream.mp3");
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(img);

  rojo = createSprite(300, 200, 200, 200);
  rojo.shapeColor = color(180, 0, 0);

  verde = createSprite(300, 400, 200, 200);
  verde.shapeColor = color(0, 180, 0);
  
  azul = createSprite(500, 200, 200, 200);
  azul.shapeColor = color(0, 0, 180);
  
  naranja = createSprite(500, 400, 200, 200);
  naranja.shapeColor = color(180, 65, 0);

  rojo.onMousePressed = function() {
    this.shapeColor = color(255, 0, 0);
    hdsp.push(1);
      sumarPuntos();
    
  }
  rojo.onMouseReleased = function() {
    this.shapeColor = color(180, 0, 0);
  }
  verde.onMousePressed = function() {
    this.shapeColor = color(0, 255, 0);      
    hdsp.push(2);
      sumarPuntos();
    
  }
  verde.onMouseReleased = function() {
    this.shapeColor = color(0, 180, 0);
  }
  azul.onMousePressed = function() {
    this.shapeColor = color(0, 0, 255);
         hdsp.push(3);
      sumarPuntos();
    
  }
  azul.onMouseReleased = function() {
    this.shapeColor = color(0, 0, 180);
  }
  naranja.onMousePressed = function() {
    this.shapeColor = color(255, 75, 0);
    hdsp.push(4);
      sumarPuntos();
   
  }
  naranja.onMouseReleased = function() {
    this.shapeColor = color(180, 65, 0);
  }

  for (let i = 0; i < int; i++) {
    setTimeout(memorizar, i * 1000);
  }
}  

function memorizar() {
  let i = 0;
  let interval = setInterval(function() {
    if (i < 1) {
      num = Math.floor(random(1, 5));
      arr.push(num);
      console.log(arr);
      console.log(hdsp);

      if (arr[pos] == 1) {
        redd();
      } else if (arr[pos] == 2) {
        greenn();
      } else if (arr[pos] == 3) {
        bluee();
      } else if (arr[pos] == 4) {
        orangee();
      }
      i++;
    }
     else {
      clearInterval(interval);
    }
  }, 1000);
}

function redd() {
  rojo.shapeColor = color(255, 0, 0);
  setTimeout(function() {
    rojo.shapeColor = color(180, 0, 0);
  }, 1000);
  setTimeout(pos++,1000);
}

function greenn() {
  verde.shapeColor = color(0, 255, 0);
  setTimeout(function() {
    verde.shapeColor = color(0, 180, 0);
  }, 1000);
  setTimeout(pos++,1000);
}

function bluee() {
  azul.shapeColor = color(0, 0, 255);
  setTimeout(function() {
    azul.shapeColor = color(0, 0, 180);
  }, 1000);
  setTimeout(pos++,1000);
}

function orangee() {
  naranja.shapeColor = color(255, 75, 0);
  setTimeout(function() {
    naranja.shapeColor = color(180, 65, 0);
  }, 1000);
  setTimeout(pos++,1000);
}

function sumarPuntos() {
  let m = hdsp.length -1;
  if(hdsp[m] !== arr[m]){
    aud.play();
    alert("tontin");
    puntos = 0;
    int = 1;
    arr = [];
    hdsp = [];
    pos = 0;
    memorizar();
    
    
  }else if(hdsp.length === arr.length){
    puntos++;
    int++
    for (let i = 0; i < int; i++) {
      setTimeout(memorizar, i * 1000);
    }
  }
}

function draw() {
  drawSprites();
  fill(140);
  noStroke();
  rect(190, 15, 300, 60);
  fill(0);
  textSize(60);
  text("Puntos: ", 195, 60);
  textSize(60);
  text(puntos, 400, 60);
}
function intento(){
  
  memorizar();
}