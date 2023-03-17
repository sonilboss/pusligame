const tiles=[]
let pictures =[]


function preload (){
  for (let i=0;i<15;i++){
  let image = loadImage("pictures/img"+(i)+".png")
  pictures.push(image)
  tiles.push(new Tile(pictures[i]))

    }
  }


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
let x=0
let y=0
for (let Tile of tiles){

  image(Tile.sprite,x,y,width/4,height/4)
  x+=width/4
  if(x>=width){
    x=0
    y+=height/4
  }
} 
}