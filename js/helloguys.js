function popup() {
	document.querySelector('.popup').classList.add('darken')
	document.querySelector('.latte').classList.remove('hide')
}

function cancel(element) {
	element.classList.remove('darken')
	document.querySelector('.latte').classList.add('hide')             
}