class Raindrop {

    constructor(x){

        this.body = Bodies.circle(x, 0, 10);
        this.x = x;
        this.y;
        this.radius = 10;
        this.color = "blue";
        World.add(world, this.body);
    }
  
    display(){
        
        push();
        noStroke();
        fill(this.color);
        this.y = this.body.position.y;
        ellipse(this.x, this.y, this.radius);
        pop();
    }

  }