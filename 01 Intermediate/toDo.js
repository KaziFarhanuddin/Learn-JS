const todos = []

// todos.push('Gym ')
// todos.push('Food ')
// todos.push('eat ')

// todos.forEach(function (todos, i) {
// 	console.log("You tash no "+String(i+1)+' is '+todos)
// })

todos.unshift('Gym ')
todos.unshift('Food ')
todos.unshift('eat ')

for (var i = 0; i < todos.length; i++) {
	console.log(`Task ${i} is ${todos[i]}`) 
}

