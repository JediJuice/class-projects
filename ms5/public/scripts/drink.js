'use strict';

$(function () {

var tileObj   = $("#tile-obj").html();
var tileTemplate = Handlebars.compile(tileObj);
var domain = 'http://localhost:3000/api';

// The loads the location.html media objects on page load*********************************************
	if ($('main').length) {
		$.get( domain + '/product', function(productData) {
			productData.forEach(function(product) {
			  $( "main" ).append( tileTemplate(product) );
			});		
		 });	
	}
	$('body').on('click', '.product-tile-wrapper:nth-child(13)', function() {
			$(this).append('<a href="friend.html"></a>')
	});	
}); // cocument ready closing tag