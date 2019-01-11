// document.getElementById('go')
// .addEventListener('click',function(){
// 	let input1 = parseInt(document.getElementById('input1').value);
// 	let input2 = parseInt(document.getElementById('input2').value);
// 	if(input1 > input2){
// 		alert("Input1 cannot be greater than input2");
// 	}else{
// 		// let result= [input2.value, input2.value];
// 		let i =0;
// 		while(input1 <= input2){
			
// 		}
// 	}
// })

let btnGo = document.getElementById('go').addEventListener('click', loop);
let strInput = ""; 

function loop(){
let input1 = parseInt(document.getElementById('input1').value);
let input2 = parseInt(document.getElementById('input2').value);

// this makes input a string

if(input1 > input2){
		alert("Input1 cannot be greater than input2");
	}else{
		while(input1 <= input2){
			strInput += input1 + "<br>";
			input1++;
		}
		document.getElementById('whileLoop').innerHTML = strInput;

		do{
			strInput+= input1 + "<br>";
			input1++;
		}while(input1 <= input2)

		document.getElementById('Do').innerHTML = strInput;
	} 
	for(input1; input1<=input2;input1++){
		strInput+= input1 + "<br>";
	}
	document.getElementById('for').innerHTML = strInput;
}
