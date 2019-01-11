let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let btn3 = document.querySelector("#three");

// btn1.addEventListener('click', function(e){
// 	console.log(e.target);
// 	console.log(e.target.innerHTML);
// });


// btn2.addEventListener('click', function(){
// 	alert('2');
// });


// btn3.addEventListener('click', function(){
// 	alert('1');
// });


btn1.addEventListener('click', getContent);
btn2.addEventListener('click', getContent);
btn3.addEventListener('click', getContent);

function getContent(e){
	let content = e.target.innerHTML;
	alert(content);
};