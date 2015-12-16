'use strict';
var $ = require('jquery');
var _ = require('lodash');

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