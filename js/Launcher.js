class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB= pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA= null; 
    }

    attach(body){
        this.launcher.bodyA= body;

    }

    display(){
     
        if(this.launcher.bodyA){

            push();

            var pointA= this.launcher.bodyA.position; 
            var pointB= this.pointB

            strokeWeight(4);
            stroke(48,22,8);
            fill("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop(); 
        }
    }
}