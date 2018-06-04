function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.readSpeed = function(){
        return speed;
    }
    this.readStrength = function(){
        return strength;
    }
}

Ninja.prototype.sayName = function(){
    console.log(this.name);
    return this;

}

Ninja.prototype.showStats = function(){
    console.log("name", this.name);
    console.log("health", this.health);
    console.log("speed", this.readSpeed());
    console.log("strength", this.readStrength());
    return this;
    
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}

var dave = new Ninja("Dave");
dave.sayName().showStats().drinkSake();