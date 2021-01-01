class Mango{
    constructor(x,y,r){
        var options = {
            resistution:0,
            friction:1,
            isStatic:true
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("sprites/mango.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        fill(255,255,255)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}