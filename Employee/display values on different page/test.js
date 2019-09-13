$(document).ready(function(){
	$("#ephone").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}
	});
	$("#datepicker").click(function(){
		$( "#datepicker" ).datepicker();
	});
	$("#submit_button").click(function() { 
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}
		else if($("#edepartment").val() == ""){
			alert("Name must be filled out");
		}
		else if($("#esalary").val() == ""){
			alert("Name must be filled out");
		}
		else if($("#ephone").val() == ""){
			alert("Name must be filled out");
		}
		else if($("#eemail").val() == ""){
			alert("Name must be filled out");
		}
		else if($("#datepicker").val() == ""){
			alert("Name must be filled out");
		}
		else {
			var name = $("#ename").val();
			sessionStorage.setItem("EmpName",name);
			var department = $("#edepartment").val();
			sessionStorage.setItem("EmpDepartment",department);
			var salary = $("#esalary").val();
			sessionStorage.setItem("EmpSalary",salary);
			var phone = $("#ephone").val();
			sessionStorage.setItem("EmpPhoneNumber",phone);
			var email = $("#eemail").val();
			sessionStorage.setItem("EmpEmail",email);
			var datetime = $("#datepicker").val();
			sessionStorage.setItem("EmpDateTime",datetime);
			window.open('test2.html');
		}
	});
});
// https://www.smashingmagazine.com/2019/07/margins-in-css/