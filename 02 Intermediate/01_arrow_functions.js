const todo = [
	{
		title:'Have Breakfast',
		isDone:true,
	},
	{
		title:'Have Lunch',
		isDone:false,
	},
	{
		title:'Have Dinner',
		isDone:true,
	},
	{
		title:'Go to gym',
		isDone:true,
	},
	{
		title:'Go for a walk',
		isDone:false,
	},
	{
		title:"Go out with friends",
		isDone:true,
	},
	{
		title:'Sleep',
		isDone:false,
	},
]

const done = todo.filter((todo)=>todo.isDone==false)
done.forEach((done)=>console.log(done.title))

const camera = {
	price:100,
	weight:200,
	//Dosent work with arrow functions as `this` is not passed by default
	discription:()=>`This is a camera ${this.price}`
}

console.log(camera.discription())

