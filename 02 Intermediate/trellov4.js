// const arr = ['Eat', 'play']

// console.log(arr.indexOf('eat'))
// console.log(arr.indexOf('Eat'))

const brr = [
	{
		title:"Eat",
		isDOne:false,
	},
	{
		title:"Sleep",
		isDOne:true,
	},
	{
		title:"Play",
		isDOne:false,
	}
]

//Method 1
// const index = brr.findIndex(function (brr, index) {
// 	return brr.title == 'Sleep'
// })

// console.log(index)

// Method 2
const value3 = brr.find(function(brr, index){
	return brr.title == "Play"
}) 
console.log(value3)

