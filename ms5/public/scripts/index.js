'use strict';

$(function () {

// Gmaps.js*********************************	

new GMaps({
  div: '#map',
  lat: -12.043333,
  lng: -77.028333
});

var userObj   = $("#user-obj").html();
var userTemplate = Handlebars.compile(userObj);
var domain = 'http://localhost:3000/api';

// The loads the location.html media objects on page load*********************************************

	$.get( domain + '/user', function(userData) {
		//console.log(userData)
		userData.forEach(function(user) {
			//console.log(user);
		  $( ".hero-3-tiles" ).append( userTemplate(user) );
	    	// console.log(user);
		});		
	 });
}); // document ready closing tag