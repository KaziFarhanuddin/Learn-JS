let text = document.querySelector('input')
var no = 0;
var ul = document.querySelector('#list')
var li;
var textA;
while (localStorage.key(no)){
	li = document.createElement('li')
	textA = document.createTextNode(localStorage.getItem(localStorage.key(no)))
	li.appendChild(textA)
	ul.appendChild(li)
	no += 1
}
no += 1
document.getElementById('add').addEventListener('click',(e) => {
	localStorage.setItem(String(no), text.value)
	li = document.createElement('li')
	textA = document.createTextNode(text.value)
	li.appendChild(textA)
	setTimeout(() => ul.appendChild(li),500)


})
