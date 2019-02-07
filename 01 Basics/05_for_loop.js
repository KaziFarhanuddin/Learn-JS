a = ['a','b','c','d']

for (let i=0; i<a.length; i++){
	console.log(a[i])
}

console.log('reverse : ')
for (let i=a.length-1; i>=0; i--){
	console.log(a[i])
}

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Qct','Nov','Dec']

months.forEach(function (month, index) {
	console.log(`${month} is ${index+1} month`)
})