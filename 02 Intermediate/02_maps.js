var kazi = {
	"name":"kazi",
	"age":21,
	"isActive":true
}

var Farhan = {
	"name":"Farhan",
	"age":20,
	"isActive":true	
}

var some = {
	"name":"some",
	"age":22,
	"isActive":false
}

let user = new Map()

user.set("kazi", kazi)
user.set("Farhan", Farhan)
user.set("some", some)


console.log(user)

// Get size 
console.log(user.size)
// Get
console.log(user.get("kazi"))
// Keys
console.log(user.keys())
