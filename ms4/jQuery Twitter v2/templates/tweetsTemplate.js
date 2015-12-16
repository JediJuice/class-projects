'use strict';

// HandlebarsSify is referenced
var Handlebars = require('hbsfy/runtime');
// Handlebars function is referenced
var templates = require('../templates/tweets.handlebars')
// Twitter functions
var tweetRender =  function(user, message) {
	return tweetTemp ({
			img: currentUser.img,
			handle: user.handle,
			id: user.id,
			message: message
		})
}

var composeRender = function(tweet) {
	return threadTemp ({
			tweetTempl: tweet
		})
}

var threadRender = function(tweet) {
	return threadTemp ({
			tweetTempl: tweet
		})
}

module.exports {
	tweetRender: tweetRender,
	composeRender: composeRender,
	threadRender: threadRender
}