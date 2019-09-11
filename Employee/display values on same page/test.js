function newform() {	

	if (document.forms["form"]["ename"].value == "") {
		alert("Name must be filled out");
		return false;
	}else if (document.forms["form"]["edepartment"].value == "") {
		alert("Department must be filled out");
		return false;
	}else if (document.forms["form"]["esalary"].value == "") {
		alert("Salary must be filled out");
		return false;
	}
	//else if (document.forms["form"]["ephone"].value == "") {
	// 	alert("Phone Number must be filled out");
	// 	return false;
	// }else if (document.forms["form"]["eemail"].value == ""){
	// 	alert("Phone Number must be filled out");
	// 	return false;
	// }else if (document.forms["form"]["edatetime"].value == "") {
	// 	alert("Date and Time must be filled out");
	// 	return false;
	// }
	else{
		document.getElementById('name').innerHTML = document.getElementById("ename").value;	
		document.getElementById('department').innerHTML = document.getElementById("edepartment").value;	
		document.getElementById('salary').innerHTML = document.getElementById("esalary").value;	
		document.getElementById('phone').innerHTML = document.getElementById("ephone").value;	
		document.getElementById('email').innerHTML = document.getElementById("eemail").value;	
	}
}
function returnback(){
	window.open('test.html');
}