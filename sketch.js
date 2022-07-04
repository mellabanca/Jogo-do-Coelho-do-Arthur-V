const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bunny;
var minkV1;
var linguadegato;
var aculpaedobolsonaro;
var minkV2;
var laka;
var ovoazul;
var minkV3;
var budhadespertada;
var onzenabanheira;
var bob;
var maxquandoperdeuaon;
var naomeestressa, quebrandoossos, criseexistencial, sucrilhosebomdemais, criancaquandochorapqobalaosaiuvoando;

function preload(){
  minkV2 = loadImage("Rabbit-01.png");
  laka = loadImage("fabrica.jpg");
  ovoazul = loadImage("Ovo.png");
  onzenabanheira = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  bob = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  maxquandoperdeuaon = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  naomeestressa = loadSound("sound1.mp3");
  quebrandoossos = loadSound("rope_cut.mp3");
  criseexistencial = loadSound("sad.wav");
  sucrilhosebomdemais = loadSound("eating_sound.mp3");
  criancaquandochorapqobalaosaiuvoando = loadSound("air.wav");
  onzenabanheira.playing = true;
  bob.playing = true;
  maxquandoperdeuaon.playing = true;
  maxquandoperdeuaon.looping = false;
  bob.looping = false;
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  onzenabanheira.frameDelay = 15;
  bob.frameDelay = 15;
  bunny = new Bunny(200, 690, 600, 20);
  minkV1 = new Rope(8, {
  x:245,
  y:30
  });
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
  linguadegato = Bodies.circle(300,300,15);
  Matter.Composite.add(minkV1.body, linguadegato);
  aculpaedobolsonaro= new Coelhopretoextremamentepreto(minkV1, linguadegato);
  minkV3 = createSprite(250,630,100,100);
  minkV3.addImage (minkV2);
  minkV3.scale = 0.2;
  minkV3.addAnimation("piscando", onzenabanheira);
  minkV3.addAnimation("comendo", bob);
  minkV3.addAnimation("maxquandoperdeuaon", maxquandoperdeuaon);
  minkV3.changeAnimation("piscando");
  budhadespertada = createImg("cut_button.png");
  budhadespertada.position(220, 30);
  budhadespertada.size(50, 50);
  budhadespertada.mouseClicked(fenix);
}

function draw() 
{
  background(51);
  image(laka,width/2,height/2,500,700);
  Engine.update(engine);
  minkV1.showdaoliviarodrigo();
  bunny.eletric();
  if(linguadegato !== null){
  image(ovoazul,linguadegato.position.x, linguadegato.position.y, 40,55);
  }
  if(maxelucas(linguadegato,minkV3)=== true){
  minkV3.changeAnimation("comendo");
  }
  if(linguadegato !== null && linguadegato.position.y >= 650){
  minkV3.changeAnimation("maxquandoperdeuaon");
  linguadegato = null;
  }
  drawSprites();
}

function fenix(){
minkV1.aarteeumaexplosao();
aculpaedobolsonaro.budha();
aculpaedobolsonaro = null;
} 

function maxelucas(body,sprite){
if(body !== null){
var eueainternet = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
if(eueainternet <= 80){
World.remove(engine.world, linguadegato);
linguadegato = null;
return true;
}else{
return false;
}
}
}