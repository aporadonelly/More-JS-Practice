let input = document.getElementById('input').value;
let myArr = [];

let btn = document.getElementById('btn').addEventListener('click', function(){
	let input = document.getElementById('input').value;
	document.getElementById('addedContent').innerHTML += "<li>" + input + "</li>";

	document.getElementById('length').innerHTML = myArr.length;

	document.getElementById('last').innerHTML = input;
	console.log(input);
	myArr.push(input);

	document.getElementById('first').innerHTML = myArr[0];
});






