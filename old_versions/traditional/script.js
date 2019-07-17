function fade(obj) {
	console.log(obj);
	setTimeout(function() {obj.innerHTML = "Woah"}, 1000);
}
function fadein() {
	let obj = document.getElementById('test');
	console.log(obj);
	setTimeout(function() {obj.style.visibility = "visible";}, 1000);
	console.log(obj.style.visibility);
}