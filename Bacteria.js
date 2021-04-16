class Bacteria {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("bacteria.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
    this.Visiblity = 255;
		World.add(world, this.body);
    
	}
	
 
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<3){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0,this.r+10, this.r);
    pop();}
    else{
      push();
      World.remove(world,this.body);
      pop();
    }
  }
}


	
	