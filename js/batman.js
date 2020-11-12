class Batman {

    constructor() {

        var options = {
            isStatic: true
        }

        this.umbrella = Bodies.circle(150, 320, 150, options);
        Matter.World.add(world, this.umbrella);
        this.image = loadAnimation("images/WalkingFrame/walking_1.png", "images/WalkingFrame/walking_2.png", "images/WalkingFrame/walking_3.png",
        "images/WalkingFrame/walking_4.png", "images/WalkingFrame/walking_5.png", "images/WalkingFrame/walking_6.png", 
        "images/WalkingFrame/walking_7.png", "images/WalkingFrame/walking_8.png");
        this.batman = createSprite(150, 330, 50, 50);
        this.batman.addAnimation("walking", this.image);
        this.batman.scale = 0.5;
    }


    display() {}
    
}