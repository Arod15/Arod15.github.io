function main1() {
	renderSideBar();
	setTimeout(function () {unhide('HOME');}, 2000);
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
		unhide('links');
		unhide('vert-nav');
	}, 1000);
}
function hide(name) {
	let flag = "className";
	let classObjs = document.getElementsByClassName(name);
	if (classObjs.length === 0) {
		classObjs = [document.getElementById(name)];
		flag = "id";
	}
	// for (i = 0; i < classObjs.length; i++) {
	// 	if (classObjs[i].className.length === 0 || classObjs[i].className === "unhide") {
	// 		classObjs[i].className = "hide";
	// 		console.log(`${classObjs[i][flag]} is now hidden`);
	// 	} else if (classObjs[i].className.slice(-7, classObjs[i].className.length) === " unhide") {
	// 		classObjs[i].className = classObjs[i].className.slice(0, -7) + " hide";
	// 		console.log(`can\'t hide ${classObjs[i][flag]}; it is already hidden`);
	// 	} else {
	// 		classObjs[i].className += " hide";
	// 		console.log(`${classObjs[i][flag]} is now hidden`);
	// 	}
	// }
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
	// for (i = 0; i < classObjs.length; i++) {
	// 	if (classObjs[i].className.length < 5) {
	// 		if (classObjs[i].className === "hide") {
	// 			classObjs[i].className = "unhide";
	// 			console.log(`successfully revealed ${classObjs[i][flag]}`);
	// 		} else {
	// 			console.log(`${classObjs[i][flag]} can't possibly be unhidden`);
	// 		}
	// 	} else if (classObjs[i].className.slice(-5, classObjs[i].className.length) !== " hide") {
	// 		console.log(classObjs[i][flag].slice(-5, classObjs[i][flag].length));
	// 		console.log(`${classObjs[i][flag]} didn't include hide class`);
	// 	} else {
	// 		classObjs[i].className = classObjs[i].className.slice(0, -5) + " unhide";
	// 		console.log(`successfully revealed ${classObjs[i][flag]}`);
	// 	}
	// }
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