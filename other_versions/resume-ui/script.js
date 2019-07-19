function fade(obj) {
	console.log(obj);
	setTimeout(function() {obj.innerHTML = "Woah"}, 1000);
}
function fadeIn() {
	// let obj = document.getElementById('test');
	let navBar = document.getElementById('nav-bar');
	let signature = document.getElementById('signature');
	let nav = document.getElementById('nav');
	let title = document.getElementById('welcome');
	let links = document.getElementById('links');
	fadeInHelper(navBar);
	// fadeInHelper(signature);
	// fadeInHelper(nav);
	setTimeout(fadeInHelper(title), 100);
	setTimeout(fadeInHelper(links), 1000);
	
}
function fadeInHelper(obj) {
	for (i = 1; i <= 10000; i++) {
		let opac = Number(obj.style.opacity) + (.0001 * i);
		console.log(opac);
		setTimeout(function() {obj.style.opacity = opac.toString()}, 3000);
		console.log(obj.style.opacity);
	}
}



function swap(string) {
	// let arr = ['PROJECTS', 'ABOUT ME', 'INTERESTS', 'GAMES'];
	let arr = ['PROJECTS'];
	arr.forEach(section => {
		let sectionObj = document.getElementById(section);
		if (section === string) {
			sectionObj.style.display = "inline-block";
		} else if (section !== string && sectionObj.style.display !== "none") {
			section.style.display = "none";
		}
	});
}