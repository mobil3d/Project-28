class launcherObject{
    constructor(bodyA){
        var options ={
            bodyA: bodyA
        }

        this.stone = Constraint.create(options);
        World.add(world,this.stone);
    }

 
    attach(body){
    this.stone.bodyA = body;
}

fly(){
    this.stone.bodyA = null;
}
    }

