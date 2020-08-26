class Bob{

    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution: 1,
            friction: -1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);}


        display(){
            var pos = this.body.position;
    
            fill ("pink");
    
            ellipseMode(CENTER);
        
            ellipse(pos.x,pos.y,100);
    
    
        }
    }
