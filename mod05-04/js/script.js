document.getElementById('btn').onclick = function largest(){	
	var num1 = (document.getElementById("num1").value);
	var num2 = (document.getElementById("num2").value);
	if(num1 > num2){
		document.getElementById('result').innerHTML = "Highest Number: "+ num1;
	}
	else{
		document.getElementById('result').innerHTML = "Highest Number: "+ num2;
	}
}


// For converting grades
document.getElementById('btn2').onclick = function convert(){	
	var grade = (document.getElementById("grade").value);
	if(grade >= 90){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: A";
	}else if (grade >= 80){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: B";
	}else if (grade >= 70){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: C";
	}else if (grade >= 65){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: D";
	}else {
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: D";
	}
}



// document.getElementById('btn3').addEventListener('click',function()) function change_greetings(){

// }
// 	}

document.getElementById('translateBtn')
.addEventListener('click', function(){
	let input = document.getElementById('language_selected').value;
	let greeting_holder = document.getElementById('greeting_holder');

	if(input==="..."){
		greeting_holder.innerHTML = "I love you!";
	}else if(input==="french"){
		greeting_holder.innerHTML = "Jet 'aime";
	}else if(input==="italian"){
		greeting_holder.innerHTML = "ti amo";
	}else{
		greeting_holder.innerHTML = "Mahal Kita";
	}
})



















