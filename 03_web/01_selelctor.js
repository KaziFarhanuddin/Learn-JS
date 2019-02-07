document.title = "JS"

const pTags = document.querySelectorAll('p')

pTags.forEach( function(element, index) {
	console.log(element.textContent)
});

console.log(pTags[1].innerHTML)
pTags[1].textContent = 'Changed by js'

pTags[0].remove()

var newP = document.getElementById("change")
console.log(newP.innerHTML)

var newP2 = document.querySelector('#change')
console.log(newP2.innerHTML)

