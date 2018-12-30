let todo = {
	day:'Monday',
	meetings:0,
	meetDone:0,

	addMeting:function(num) {
		this.meetings = this.meetings +num;
	},
	addMetingDone:function(num) {
		this.meetDone=this.meetDone+num;
	},
	clearDay:function(){
		this.meetings=0
		this.meetDone=0
	},
	getSummery:function(){
		return this.meetings-this.meetDone
	},
}


todo.addMeting(4)
todo.clearDay()
console.log(todo.meetDone)