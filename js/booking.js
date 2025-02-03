// Name: Rajkumar Patel

$(document).ready(function() {
	$('#reservation_form').submit(function(eve) {
	  eve.preventDefault();
  
	  const name = $('#txt_name').val().trim();
	  const email = $('#txt_mail').val().trim();
	  const phone = $('#num_ph').val().trim();
	  const carNumber = $('#num_car').val().trim();
	  const address = $('#txt_address').val().trim();
	  const services = $('input[type="checkbox"]:checked').length > 0;
	  const paymentMethod = $('#payment_method').val();
	  const date = $('#datepicker').val();
	  const time = $('#div_time select').val();
  
	  let isValid = true;
	  if (name === '') {
		isValid = false;
		alert('Please enter your name');
	  }
	  else if (email === '') {
		isValid = false;
		alert('Please enter your email');
	  }
	  else if (!isValidEmail(email)) {
		isValid = false;
		alert('Please enter a valid email address');
	  }
	  else if (phone === '') {
		isValid = false;
		alert('Please enter your phone number');
	  }
	  else if (carNumber === '') {
		isValid = false;
		alert('Please enter your car number');
	  }
	  else if (address === '') {
		isValid = false;
		alert('Please enter your address');
	  }
	  else if (!services) {
		isValid = false;
		alert('Please select at least one service');
	  }
	  else if (paymentMethod === '') {
		isValid = false;
		alert('Please select a payment method');
	  }
	  else if (date === '') {
		isValid = false;
		alert('Please select a date');
	  }
	  else if (time === '') {
		isValid = false;
		alert('Please select a time.');
	  }
  
	  if (isValid) {
		$("#dialog").dialog({
			modal: true,
			buttons: {
			  Ok: function() {
				  $(this).dialog("close");
				  $('#reservation_form')[0].reset();
			  }
			}
		  });
	  }
	});
  
	function isValidEmail(email) {
	  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return emailPattern.test(email);
	}
  });

//Code for Datepicker jquery UI widget
$(function () {
	$("#datepicker").datepicker();
  });
  