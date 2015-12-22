'use strict';

$(function () {

var locationObj   = $("#location-obj").html();
var locTemplate = Handlebars.compile(locationObj);
var domain = 'http://localhost:3000/api';

// The loads the location.html media objects on page load*********************************************

	$.get( domain + '/location', function(locationData) {
		//console.log(userData)
		locationData.forEach(function(location) {
			//console.log(user);
		  $( ".left-panel" ).append( locTemplate(location) );
	    	// console.log(user);
		});		
	});	
});