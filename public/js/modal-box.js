var modal = document.getElementById('mymodal');

var mybtn = document.getElementById('mybtn');

var span = document.querySelector('.close');
var form = document.getElementById('form')
mybtn.addEventListener('click',function () {
	modal.style.display = 'block'
	// body...
});


span.addEventListener('click',function(){
	modal.style.display = "none";
	form.reset();

});

window.addEventListener('click',function(event){
	if(event.target === modal){
		modal.style.display = 'none';
		form.reset();
	}


})
