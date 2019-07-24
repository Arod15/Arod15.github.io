function main1() {
	renderSideBar();
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
	let classObjs = document.getElementsByClassName(name);
	if (classObjs.length === 0) {
		classObjs = [document.getElementById(name)];
	}
	for (i = 0; i < classObjs.length; i++) {
		if (classObjs[i].length < 5) {
			classObjs[i].className += " hide";
			console.log(`${classObjs[i].className} is now hidden`);
		} else if (classObjs[i].className.slice(-5, classObjs[i].className.length) === " hide") {
			console.log(`can\'t hide ${classObjs[i]["className"]}; it is already hidden`);
		} else {
			classObjs[i].className += " hide";
			console.log(`${classObjs[i].className} is now hidden`);
		}
	}
}
function unhide(name) {
	let flag = "className";
	let classObjs = document.getElementsByClassName(name);
	if (classObjs.length === 0) {
		classObjs = [document.getElementById(name)];
		flag = "id";
	}
	console.log(classObjs);
	for (i = 0; i < classObjs.length; i++) {
		if (classObjs[i].className.length < 5) {
			if (classObjs[i].className === "hide") {
				classObjs[i].className = "";
				console.log(`successfully revealed ${classObjs[i][flag]}`);
			} else {
				console.log(`${classObjs[i][flag]} can't possibly be unhidden`);
			}
		} else if (classObjs[i].className.slice(-5, classObjs[i].className.length) !== " hide") {
			console.log(classObjs[i][flag].slice(-5, classObjs[i][flag].length));
			console.log(`${classObjs[i][flag]} didn't include hide class`);
		} else {
			classObjs[i].className = classObjs[i].className.slice(0, -5);
			console.log(`successfully revealed ${classObjs[i][flag]}`);
		}
	}
	console.log(classObjs);
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