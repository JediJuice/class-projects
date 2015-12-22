'use strict';
$(function () {

var locationObj   = $("#location-obj").html();
var locTemplate = Handlebars.compile(locationObj);

// The loads the current user profile on page load*********************************************
	if ($('#profile-edit').length) {

		$.get( 'api/user/1', function(userData) {
			userData.forEach(function(user) {
			  $( ".left-panel" ).append( locTemplate(user) )	 
			});	
		}).then(function() {
				 $(".link-wrapper").click(function(){
	        		$('div.form-wrapper.hidden').toggleClass('hidden')
	    	});
		});		

// Update user profile****************************************	

	$('#profile-edit').on('submit', function() {
		var formData = {

			firstName: $('input.firstName').val(),
		  	lastName: $('input.lastName').val(),
			email: $('input.email').val(),
		 	dob: $('input.dob').val(),
		    favoriteProduct: $('input.gift').val()
		}
		$.ajax('/api/user/1', {
			  method: 'PUT',
			  data: {
			    firstName: $('input.firstName').val(),
			  	lastName: $('input.lastName').val(),
				email: $('input.email').val(),
			 	dob: $('input.dob').val(),
			    favoriteProduct: $('input.gift').val()
			  }
			}).then(function(data) {
			  console.log(data);
			});		
			
			location.href = 'friend.html';
			return false;
	 })
}   // closing page check	
}); // closing document ready