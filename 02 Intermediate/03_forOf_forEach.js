let user = new Map()

user.set("kazi", "kazi")
user.set("Farhan", "Farhan")
user.set("some", "some")


for (const [key, val] of user.entries()){
	console.log(`${key} ${val}`)
}

console.log("")

user.forEach((key, val) => console.log(`${key} ${val}`));

// Making dict from array of array
var arr = [['one', 1], ['two',2]]

var map = new Map(arr) 

console.log(map)