
$(document).ready(function(){
	$("input#edepartment").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}
	});
	$("input#esalary").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}else if($("#edepartment").val() == ""){
			alert("Department must be filled out");
		}
	});
	$("input#ephone").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}else if($("#edepartment").val() == ""){
			alert("Department must be filled out");
		}else if($("#esalary").val() == ""){
			alert("Salary must be filled out");
		}
	});
	$("input#eemail").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}else if($("#edepartment").val() == ""){
			alert("Department must be filled out");
		}else if($("#esalary").val() == ""){
			alert("Salary must be filled out");
		}
	});
	$("input#datepicker").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}else if($("#edepartment").val() == ""){
			alert("Department must be filled out");
		}else if($("#esalary").val() == ""){
			alert("Salary must be filled out");
		}else {
			$( "#datepicker" ).datepicker();
		}
	});
});

// $(function() {
// 	$( "#datepicker" ).datepicker();
// });

$(document).ready(function(){
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
