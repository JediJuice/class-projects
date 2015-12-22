'use strict';



$(function () {

var domain = 'http://localhost:3000/api';

// The button checkout form to pay and post information *****************************************

	$('#checkout-form').on('submit', function() {
			var firstName = $('input.form-firstName').val()
			var lastName = $('input.form-lastName').val()
			var email = $('input.form-email').val()
			var DOB = $('input.form-DOB').val()
	
		$.post( domain + '/user', {

				firstName: firstName,
				lastName: lastName,
				email: email,
				DOB: DOB

		}).then(function(data) {
			$('input').val('')
		});

		return false
	});	
});