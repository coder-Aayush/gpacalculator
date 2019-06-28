	const calc = () => {
	let gpa = document.getElementById('gpa').value;
	let status = "";
	result = parseInt(gpa*25);

	if (result<=100 && result>=91) {
		status = "A+";
	}else if (result<=81 && result>=70) {
		status = "A";
	}else if (result<=71 && result>=60) {
		status = "B+";
	}else if (result<=61 && result>=50) {
		status = "B";
	}else if (result<=51 && result>=40) {
		status = "C+";
	}else if (result<=41 && result>=30) {
		status = "C";
	}else if (result<=31 && result>=20) {
		status = "D+";
	}else if (result<=21 && result>=10) {
		status = "Your Grade is D";
	}else if (result<=11 && result>=0) {
		status = "E";
	}else if (gpa<=parseFloat(4.1)) {
		status = "Enter Correct 'GPA'"
	}
	document.getElementById('showData').innerHTML = `Congratulations You have Scored ${result}% and Grade is ${status}`
}