function main() {
	renderSideBar();
	setTimeout(function () {unhide('HOME');}, 1000);
}
function renderSideBar() {
	let sideBar = document.getElementById("sidebar");
	unhide('sidebar');
	let vh = window.innerWidth / 5;
	let inc = vh / 7;
	let animation = setInterval(function() {
		if (sideBar.clientWidth + inc >= vh) {
			clearInterval(animation);
			return;
		}
		sideBar.style.width = (sideBar.clientWidth + inc).toString() + "px";
	}, 10);
	setTimeout(function() {
		unhide('squirtle-box');
		unhide('name');
		unhide('links');
		unhide('vert-nav');
	}, 500);
}
function hide(name) {
	let flag = "className";
	let classObjs = document.getElementsByClassName(name);
	if (classObjs.length === 0) {
		classObjs = [document.getElementById(name)];
		flag = "id";
	}
	for (i = 0; i < classObjs.length; i++) {
		classObjs[i].style.display = "none";
	}
}
function unhide(name) {
	let flag = "className";
	let classObjs = document.getElementsByClassName(name);
	if (classObjs.length === 0) {
		classObjs = [document.getElementById(name)];
		flag = "id";
	}
	for (i = 0; i < classObjs.length; i++) {
		classObjs[i].style.display = "inline-block";
	}
}

function swap(string) {
	let arr = ['HOME', 'PROJECTS', 'BIO', 'INTERESTS', 'GAMES'];
	// let arr = ['PROJECTS'];
	arr.forEach(section => {
		// console.log(section);
		let sectionObj = document.getElementById(section);
		// console.log(sectionObj);
		if (section === string) {
			unhide(section);
			// sectionObj.style.display = "inline-block";
		} else {
			hide(section);
		}
	});
}