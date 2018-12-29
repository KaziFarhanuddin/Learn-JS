const num = ['one','two','three']

// num[1]='FOUR'

// console.log(num)
console.log(num)

//Remove first element
console.log('Shift')
let num1 = num.shift()
console.log(num1)
console.log(num)

//Add to first 
console.log('UnShift')
num1 = num.unshift('NEW')
console.log(num1)
console.log(num)

//Pop element
console.log('POP')
let poped = num.pop()
console.log(poped)
console.log(num)

//Add to last
console.log('push')
num.push('seven')
console.log(num)

num.splice(2,1,'SOMETHING')		//(StartFrom, remove(howmany), placeWhat)
console.log(num)
