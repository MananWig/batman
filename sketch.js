//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const engine = Engine.create();
const world = engine.world;
//variables
var raindrops = [];
var batman;
var thunder,thunder1, thunder2, thunder3, thunder4;


//load images
 function preload(){
  thunder1 = loadImage("images/thunderbolt/1.png"); 
  thunder2 = loadImage("images/thunderbolt/2.png"); 
  thunder3 = loadImage("images/thunderbolt/3.png"); 
  thunder4 = loadImage("images/thunderbolt/4.png"); 
 }


function setup() {

    //canvas
    createCanvas(300, 500);

    //batman
    batman = new Batman();
    //thunder
    thunder = createSprite(random(50, 250), 100, 50, 50);
    thunder.visible = false;

    //run engine
    Engine.run(engine);
}


function draw() {

    //background
    background("black");

    //strike ligtning, spawn raindrops
    strikeLightning();
    spawnRaindrops();

    //draw all sprites
    drawSprites();

    console.log(mouseX, mouseY);
}



function spawnRaindrops() {

    if(frameCount % 2 === 0){
        raindrop = new Raindrop(random(0, 300));
        raindrop.lifetime = 50;
        raindrops.push(raindrop);
    }
    
    for(var i = 0; i < raindrops.length; i++){
        raindrops[i].display();
    }
}


function strikeLightning(){

    if(frameCount % 30 === 0) {

        var count;
        count++
        var rand = Math.round(random(1, 4));

        switch(rand) {
            case 1:thunder.addImage(thunder1);
                    thunder.x = random(0, 300);
                    thunder.scale = 0.3;
                    thunder.visible = true;
                    break;
            case 2:thunder.addImage(thunder2);
                    thunder.x = random(0, 300);
                    thunder.scale = 0.3;
                    thunder.visible = true;
                    break;
            case 3:thunder.addImage(thunder3);
                    thunder.x = random(0, 300);
                    thunder.scale = 0.3;
                    thunder.visible = true;
                    break;
            case 4:thunder.addImage(thunder4);
                    thunder.x = random(0, 300);
                    thunder.scale = 0.3;
                    thunder.visible = true;
                    break;
            default: break;
        }

        if(count >= 10){
            count = 0;
            thunder.visible = false;
        }
    }
}
