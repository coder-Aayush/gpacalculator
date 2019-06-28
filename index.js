	const calc = () => {
	let gpa = document.getElementById('gpa').value;
	let status = "";
	result = parseInt(gpa*25);

	if (result<=91) {
		status = "A+";
	}else if (result<=81) {
		status = "A";
	}else if (result<=71) {
		status = "B+";
	}else if (result<=61) {
		status = "B";
	}else if (result<=51) {
		status = "C+";
	}else if (result<=41) {
		status = "C";
	}else if (result<=31) {
		status = "D+";
	}else if (result<=21) {
		status = "Your Grade is D";
	}else if (result<=11) {
		status = "E";
	}else if (gpa<=parseFloat(4.1)) {
		status = "Enter Correct 'GPA'"
	}
	document.getElementById('showData').innerHTML = `Congratulations You have Scored ${result}% and Grade is ${status}`
}