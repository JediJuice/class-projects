'use strict';

$(function () {

	var locationObj   = $("#location-obj").html();
	var locTemplate = Handlebars.compile(locationObj);
	var domain = 'http://localhost:3000/api';

// The loads the location.html media objects on page load*********************************************
		$.get( domain + '/user', function(userData) {
			//console.log(userData)
			userData.forEach(function(user) {
				//console.log(user);
			  $( ".left-panel" ).append( locTemplate(user) );
		    	// console.log(user);
			});		
					$(".text-media-obj").on("click", function() {
						// console.log('function works')
						location.href = 'food_drink.html';
						return false
					});
		 })	
}); // closing document ready