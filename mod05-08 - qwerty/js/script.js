let divs = document.querySelectorAll('div');
let input = document.getElementById('input');
for(let i = 0; i < divs.length; i++){
	console.log(divs[i]);
	divs[i].addEventListener('click', function(e){
	let divs = e.target.innerHTML;
	console.log(e.target);

	input.value += divs;
	console.log(divs);





		// divs[].push(letter);
	// document.querySelectorAll('input').innerHTML = letter;
	// console.log(letter);
})
}
