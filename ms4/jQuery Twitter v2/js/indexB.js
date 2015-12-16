$(function () {

// 'use strict';

var currentUser = {
  id: 1,
  img: 'brad.png',
  handle: '@bradwestfall',
  realName: 'Brad Westfall',
  tweet: ''
};


var context = {
      currentUser: currentUser,
      message: message
  }

// text from user
var textArea = $(this).parents('.compose').find('textarea');
var message = textArea.val();

// external resources
var domain = 'http://localhost:3000';



var tweetSource   = $("#tweet-template").html();
var threadSource   = $("#thread-template").html();
var composeSource   = $("#compose-template").html();

var tweetTemplate = Handlebars.compile(tweetSource);
var threadTemplate = Handlebars.compile(threadSource);
var composeTemplate = Handlebars.compile(composeSource);

 // renderTweet function
	function renderTweet(userData) {	
		$.ajax(domain + '/users/' + currentUser.id, {
				  method: 'GET'
				}).then(function(data) {
		 			$('#tweets').append(tweetTemplate(data))
				  	//console.log(data);
				});
		 			$('textarea').val('') 
		};
 // renderThread function
 	function renderThread(userData) {
		 $.get(domain + '/users/' + currentUser.id)
		 // console.log(userData)
		 $('#tweets').append(tweetTemplate(userData))
		 // clear out the 
		 $('textarea').val('')	
	};
 // // renderCompose function
	function renderCompose(userData) {	
		$.ajax(domain + '/users/' + currentUser.id, {
				  method: 'GET'
				}).then(function(data) {
		 			$('.').append(composeTemplate(data))
				  	//console.log(data);
				});
		 			$('textarea').val('') 
		};



// State Management 1 Expand the text area 
	$('.compose').on('click','textarea', function () {
		//console.log('Click')
		$('.compose').addClass('expand')
	});
// State Management 2 Grab the value of the text area
	$('.compose').on('click', 'button', function () {
	 		// console.log('the button works')
	 		userText = $('textarea').val()
	 		$.ajax({
  					url: domain + '/users/1',
					method: 'PUT',
					data: {
						    tweet: userText,
										  }
			}).then( function renderThread(userData) {	
				$.ajax(domain + '/users/' + currentUser.id, {
						  method: 'GET'
						}).then(function(data) {
				 			$('.tweet').append(threadTemplate({
				 				tweet: renderTweet(data),
				 				compose: renderCompose()
				 			}))
						  	//console.log(data);
						});
				 			$('textarea').val('') 
				});
	 		return false				
	});

//*****************************************************************************



				function renderThread(user, message) {
				      return threadTemplate({
				        tweet: renderTweet(user, message),
				        compose: renderCompose()
				      })
				    }
	// $('#tweets').on('click','article.tweet', function () {
	// 		// console.log('Brad works');
	// 	if ($(this).parent('.tweet').length) {
	// 			console.log('This is a thread');
	// 	}else {
	// 			console.log('This is a tweet');
	// 	 }

	// });






}); // closing for .ready
