$(document).ready(function(){
	$("form").attr('autocomplete', 'off');
	$(".alert_box").hide();

	$("#datepicker").hover(function(){
		if($("#eemail").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Email must be filled out");
			return false;
		}}, function(){
			// $(".alert_box").hide();
		});

	$("#eemail").hover(function(){
		$(this).css({"background-color": "yellow"});
	}, function(){
		$(this).css("background-color", "white");
	});

	// var name = $("#phonenumber_label").text();
	// if (name.length > 9) {
	// 	var shortname = name.substring(0, 9) + ".... :";
	// 	$('#phonenumber_label').replaceWith(shortname);
	// 	function(){
	// 	$(this).css("background-color", "white");
	// }
	// }

	$("#ephone").click(function(){
		if($("#ename").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Name must be filled out");
		}
	});
	$("#datepicker").click(function(){ 	
		$( "#datepicker" ).datepicker({ 
			numberOfMonths:2});
	});
	$("#submit_button").click(function() { 
		if($("#ename").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Name must be filled out");
			return false;
		}

		else if($("#edepartment").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Department must be filled out");
			return false;
		}
		else if($("#esalary").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Salary must be filled out");
			return false;
		}
		else if($("#ephone").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Phone number must be filled out");
			return false;
		}
		else if($("#eemail").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Email must be filled out");
			return false;
		}
		else if($("#datepicker").val() == ""){
			$(".alert_box").show();
			$(".nothing").text("Date must be filled out");
			return false;
		}
		else {		
			// var name = $("#ename").val();
			// $(document).load("test2.html",function(){
			// 	var ename = $("#name").html(name);
			// 	alert(ename);

			// });
				// $.post("test2.html",function(data){
					// $('#name').text(data);
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
		$(".alert_box").hide();
		$("form").trigger("reset");
	});
});
// https://www.smashingmagazine.com/2019/07/margins-in-css/