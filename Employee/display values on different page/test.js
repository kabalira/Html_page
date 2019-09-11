
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
	}else if (document.forms["form"]["ephone"].value == "") {
		alert("Phone Number must be filled out");
		return false;
	}else if (document.forms["form"]["eemail"].value == "") {
		alert("Email must be filled out");
		return false;
	}
	else{					
		var name = document.getElementById("ename").value;
		sessionStorage.setItem("EmpName",name);
		var department = document.getElementById("edepartment").value;
		sessionStorage.setItem("EmpDepartment",department);
		var salary = document.getElementById("esalary").value;
		sessionStorage.setItem("EmpSalary",salary);
		var phone = document.getElementById("ephone").value;
		sessionStorage.setItem("EmpPhoneNumber",phone);
		var email = document.getElementById("eemail").value;
		sessionStorage.setItem("EmpEmail",email);
		var datetime = document.getElementById("edatetime").value;
		sessionStorage.setItem("EmpDateTime",datetime);
		window.open('test2.html');
	}
}
