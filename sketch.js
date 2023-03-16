let puzles
const tiles=[]
let pictures =[]

function preload (){
  for (let i=0;i<=15;i++){
    for (let j=0;j<=15;j++){
  let image = loadImage("pictures/img"+i+".png")
  pictures.push(image)
  tiles.push(new Tile(400 * i ,400 * j,random(pictures),windowWidth/4,windowHeight/4))
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let Tile of tiles){
    Tile.display();
  }
}