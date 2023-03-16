let puzles
let tiles=[]

function preload (){
  for (i=0;i<15;i++){
  let puzles = loadImage("pictures/img"+i+".png")
  let tile = new tile(img)
  tiles.push(tile)

}
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  tileDraw()
}

function tileDraw(){
  for (i=0;i>15;i++){
    image(tiles[i].sprite,0,0,i*width/4-2,i*height/4-2)
  }


}
