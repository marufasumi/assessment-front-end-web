console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener("mouseover",pictureAlert)
function pictureAlert(img) {
	alert("Download the picture for free")
	
}






