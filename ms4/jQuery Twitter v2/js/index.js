
'use strict';

var currentUser = {
 handle: '@bradwestfall',
 img: 'brad.png',
 id: 1
};

var api = require('api.js')

var tweets = require('tweetsTemplate.js')



// var $ = require ('jquery');
// var template = require ('./template.js');


$(function () {

$('#main').on('focus', 'textarea', function() {
	$(this).parents('.compose').addClass('expand')
		// console.log('expand')
		return false
	})

$('#tweets').on('click', '.thread > .tweet', function() {
		$(this).parents('.thread').toggleClass('expand')
		// console.log("÷Hello!")
		return false
})


$('#main').on('submit', 'form', function(){
		var message = $(this).find('textarea').val()
		var newTweet = tweetRender(currentUser,message)
		var newThread = threadRender(newTweet)
		var userId = currentUser.id
		var payload = {
			userId: userId,
			message: message,
			}

		var reload = { // how do you make this more dry?
			userId: userId,
			message: message,
			tweetId: userId
			}

		

		 if ($(this).parents('header').length) {

				$.post(domain + '/tweets/',payload ).then(function() {

	            }).fail(function() {
	                console.log('The tweet post failed')
	            })
		 		
        			$('#tweets').append(threadRender(newTweet))	
          }else {

          		$.post(domain + '/replies/',reload ).then(function() {
					
	            }).fail(function() {
	                console.log('The tweet reply failed')
	            })
            		$(this).parents('.replies').append(tweetRender(currentUser.id, message));
          }

          		$(this).find('textarea').val('')
			return false
		})







	
	}); // document ready 