
document.getElementById('button').onclick = function check_Odd_Even(){
		var input = document.getElementById('input').value; 
		if(input % 2 == 0)
		{
			var answer = document.getElementById('result').innerHTML = "Even";
		}
		else
		{
			var answer = document.getElementById('result').innerHTML = "Odd";
		}
	}


// if year is not divisible by 4 then not leap year
// else if year is not divisible by 100 then leap year
// else if year is divisible by 400 then leap year
// else not leap year



















// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));
