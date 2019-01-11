
document.getElementById('button').onclick = function check_leapyear(){
		var year = document.getElementById('year').value; 
		if( (year % 4 == 0 ) && (year % 100 != 0) || (year % 400 == 0) )
		{
			var answer = document.getElementById('result').innerHTML = "Yes! It is a Leap Year";
		}
		else
		{
			var answer = document.getElementById('result').innerHTML = "Nope, it is not!";
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
