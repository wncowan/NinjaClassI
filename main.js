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

Ninja.prototype.punch = function(ninja){
    if (ninja instanceof  Ninja) {
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 health.`)
        ninja.health -= 5;
        ninja.showStats();
    } else {
        console.log("Ninjas only punch ninjas.")
    }
    return this;

}

Ninja.prototype.kick = function(ninja){
    if (ninja instanceof Ninja) {
        console.log(`${ninja.name} was kicked by ${this.name} and lost ${15*this.readStrength()} health.`)
        ninja.health -= 15*this.readStrength();
        ninja.showStats();
    } else {
        console.log("Ninjas can only kick ninjas.")
    }
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
    console.log("sake drank");
    return this;
}

const cat = {};
var dave = new Ninja("Dave");
var steve = new Ninja("Steve");
dave.punch(cat).kick(steve).drinkSake();