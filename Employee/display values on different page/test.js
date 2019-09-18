$(document).ready(function(){
	$("form").attr('autocomplete', 'off');

	// var name = $("#phonenumber_label").text();
	// if (name.length > 9) {
	// 	var shortname = name.substring(0, 9) + ".... :";
	// 	$('#phonenumber_label').replaceWith(shortname);
	// }

	$("#ephone").click(function(){
		if($("#ename").val() == ""){
			alert("Name must be filled out");
		}
	});
	$("#datepicker").click(function(){
		$( "#datepicker" ).datepicker({ 
			numberOfMonths:2});
	});
	$("#submit_button").click(function() { 
		if($("#ename").val() == ""){
			alert("Name must be filled out");
			return false;
		}
		else if($("#edepartment").val() == ""){
			alert("department must be filled out");
			return false;
		}
		else if($("#esalary").val() == ""){
			alert("salary must be filled out");
			return false;
		}
		else if($("#ephone").val() == ""){
			alert("phone number must be filled out");
			return false;
		}
		else if($("#eemail").val() == ""){
			alert("Name email be filled out");
			return false;
		}
		else if($("#datepicker").val() == ""){
			alert("date must be filled out");
			return false;
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
			// window.open('test2.html');
		}
	});
	$("#clear_button").click(function(){
        $("form").trigger("reset");
    });
});
// https://www.smashingmagazine.com/2019/07/margins-in-css/