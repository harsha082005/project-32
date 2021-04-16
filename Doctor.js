class Doctor {
  constructor(x,y,r)
	{
		var options = { 
			'restitution':0.8,
			'density': 0.4, 
			'friction': 0.1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("doctor.png");
		this.body=Bodies.rectangle(this.x, this.y,50,50, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var doctorPos=this.body.position;		
			push()
			translate(doctorPos.x, doctorPos.y);
			rectMode(CENTER)
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,100,100)
			pop()
			
	}
}
