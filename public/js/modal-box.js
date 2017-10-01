var modal = document.getElementById('mymodal');


var mybtn = document.getElementById('mybtn');


var span = document.querySelector('.close');

var form = document.getElementById('form');

mybtn.addEventListener('click',function () {
	modal.style.display = 'block'

	// body...
});

mybtn1.addEventListener('click',function () {
	console.log("lkasd");
	modal1.style.display = 'block'
	// body...
});



if(span1)
span1.addEventListener('click',function(){
	modal1.style.display = "none";
	form.reset();



span.addEventListener('click',function(){
	modal.style.display = "none";
	form.reset();

});



window.addEventListener('click',function(event){
	if(event.target === modal){
		modal.style.display = 'none';
		form.reset();
	}


});
