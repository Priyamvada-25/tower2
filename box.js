class Box{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.4,
          'friction':0.1, 
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        
        console.log(this.body.speed);
        if(this.body.speed<4){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect( 0,0, this.width, this.height);
        pop();
         }
          else{
         World.remove(world,this.body);
         push();
         this.Visibility= this.Visibility-5
         tint(255,this.Visibility);
         pop();
         }
        
        
      }
    } 