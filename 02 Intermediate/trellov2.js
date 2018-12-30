let todo = {
	day:'Monday',
	meetings:0,
	meetDone:0,
}

let addMeeting = function (todo, meeting=0) {
	todo.meetings = todo.meetings + meeting
}

let doneMeeting = function (todo, meeting=0) {
	todo.meetDone = todo.meetDone + meeting
}

let resetDay = function (todo) {
	todo.meetings = 0 
	todo.meetDone = 0
}

let getSummery = function (todo) {
	let left = todo.meetings - todo.meetDone
	return `You have ${left} left to do`
}

addMeeting(todo, 2)
addMeeting(todo, 4)

doneMeeting(todo, 2)


console.log(getSummery(todo))