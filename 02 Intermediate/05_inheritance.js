// Inheritance is done by using extends

// Method over write - Js interpretor will look for method defination in 
//      child class first then in the parent class

// Super is needed to call parent constructor

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }
}

class Indian extends Human {
    // constructor
    constructor(name){
        // Calling parent constructor
        super(name, 21)
        console.log("This is second constructor")
    }
    // Method over write
    getAge(){
        return `${this.age.toString()} ${this.name}`
    }
}

const kazi = new Indian('kazi',21);
console.log(kazi.getName())
console.log(kazi.getAge())