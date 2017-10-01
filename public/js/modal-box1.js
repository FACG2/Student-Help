var mybtn1 = document.getElementById('mybtn1');

var modal1 = document.getElementById('mymodal1');

var span1 = document.querySelector('.close1');

mybtn1.addEventListener('click', function () {
  modal1.style.display = 'block';
	// body...
});

span1.addEventListener('click', function () {
  modal1.style.display = 'none';
  form.reset();
});

window.addEventListener('click', function (event) {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});
