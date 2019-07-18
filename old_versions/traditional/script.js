function fade(obj) {
	console.log(obj);
	setTimeout(function() {obj.innerHTML = "Woah"}, 1000);
}
function fadein() {
	let obj = document.getElementById('test');
	console.log(obj);
	// setTimeout(function() {obj.style.visibility = "visible";}, 1000);
	for (int i = 1; i < 10; i++) {
		let opac = obj.style.opacity
		setTimeout(function() {obj.style.opacity = ""})
	}
	console.log(obj.style.visibility);
}