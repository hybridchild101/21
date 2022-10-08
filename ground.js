class Ground {
    constructor(x, y, width, height) {
        let options={
            isStatic:true
        }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    }
    display() {
     let pos=this.body.position
  
      push();
      rect(pos.x,pos.y,this.width,this.height)
      rectMode(CENTER);
      pop();
    }
  }