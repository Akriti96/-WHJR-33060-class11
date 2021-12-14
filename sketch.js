var trex,trexRuning
var ground,groundImage

// preload is used to load the images or sounds or video
function preload(){
trexRuning=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage= loadImage("ground2.png")

}


// creating object one time
function setup(){
  createCanvas(400,400)


  // creating trex-animation
  trex= createSprite(20,360,30,30)
  trex.addAnimation("running",trexRuning)
  trex.scale=0.5



  // ground
  ground= createSprite(200,370,400,20)
  ground.addImage("ground",groundImage)
}

// display objects and their functions multiple times
function draw(){

background("pink")
 drawSprites()


 if(keyDown("space")){
   trex.velocityY= -10
 }

 trex.velocityY=trex.velocityY+0.8
//  console.log(trex.velocityY)

// collied
trex.collide(ground)
}
