class Human{
    // constructor
	constructor(name, age){
		this.name = name
		this.age = age
	}
	// Method
	display(){
		console.log(this.name)
	}
}

const kazi = new Human('kazi', 21)

console.log(kazi)

kazi.display()