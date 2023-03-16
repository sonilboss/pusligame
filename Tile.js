class Tile {
    constructor(x,y,sprite,width,height){
   this.sprite=sprite
   this.x=x
   this.y=y
   this.width=width
   this.height=height
    }
    display(){
        stroke(244)
        strokeWeight(3)
        noFill()
        image(this.sprite,this.x,this.y)
    }

}