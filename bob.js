class Bob{
    constructor(x,y,r) { 
        var options={ 
         isStatic:false,
         restitution:0.3, 
         friction:0.5,
          density:1.2
  }
    this.x=x;
      this.y=y; 
      this.r=r 
     this.body=Bodies.circle(this.x, this.y, this.r/2, options)
     World.add(world, this.body);
     //this.image = loadImage("paper.png")
    }
display(){
 var bobpos=this.body.position;
  push() 
  translate(bobpos.x, bobpos.y);
  rotate(this.body.angle)
 //  rectMode(CENTER)
   strokeWeight(3); 
   fill(255,0,255) 
   ellipse(0,0,this.r);
   //imageMode(CENTER)
  // image(this.image,0,0,this.width,this.height)
  
    pop() 
}
}