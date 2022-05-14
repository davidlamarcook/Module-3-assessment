console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function complimentUser(){
	alert("Sup cutie, I'm Batman")
}

let picture = document.querySelector('img')


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', complimentUser);