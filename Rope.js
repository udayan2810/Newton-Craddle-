class Rope {
    constructor (){
    var options={   
    stiffness : 10,
    length : 20
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
    }
    }