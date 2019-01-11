let load_balance = 200;
let amount10 = document.getElementById('load10');
let amount50 = document.getElementById('load50');
let amount100 = document.getElementById('load100');
let new_load_bal;

document.getElementById('load10')
.addEventListener('click',function(){
	let amount = document.getElementById('load10').value;
	let load_left = load_balance - amount;
	if(load_balance > amount){
		let load_left = load_balance - amount;
		return load_left;

	}
	// document.getElementById('load_balance').innerHTML = "Load Balance is: " + load_left;
	console.log("Load Balance is: " + load_left);
})









