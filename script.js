function main1() {
	renderSideBar();
	let sideBar = document.getElementById("sidebar");


}
function renderSideBar() {
	let sideBar = document.getElementById("sidebar");
	sideBar.style.display = "inline-block";
	let vh = window.innerWidth / 5;
	let inc = vh / 7;
	let animation = setInterval(function() {
		if (sideBar.clientWidth + inc >= vh) {
			clearInterval(animation);
			return;
		}
		sideBar.style.width = (sideBar.clientWidth + inc).toString() + "px";
	}, 10);
	// setTimeout(function () {sideBar.style.display = "none";}, 75);
	unhide('squirtle-box');
}
function hide(className) {
	let classObjs = document.getElementsByClassName(className);
	classObjs.forEach(obj => {
		obj.className += " hide";
	});
}
function unhide(className) {
	let classObjs = document.getElementsByClassName(className);
	// fix the for loop
	for (i = 0; i < classObjs.length; i++) {
		if (obj.className.length < 5) {
			console.log('not long enough to have hide class');
		} else if (obj.className.slice(-5, obj.className.length) !== " hide") {
			console.log('didn\'t have hide class');
		} else {
			obj.className = obj.className.slice(0, -5);
		}
	};
}

function swap(string) {
	let arr = ['HOME', 'PROJECTS', 'BIO', 'INTERESTS', 'GAMES'];
	// let arr = ['PROJECTS'];
	arr.forEach(section => {
		// console.log(section);
		let sectionObj = document.getElementById(section);
		// console.log(sectionObj);
		if (section === string) {
			sectionObj.style.display = "inline-block";
		} else if (section !== string && sectionObj.style.display !== "none") {
			try {sectionObj.style.display = "none";} catch (err) {console.log(`${section}: ${err}`);}
		}
	});
}