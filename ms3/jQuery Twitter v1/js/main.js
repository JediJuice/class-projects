$(function () {


	var user = {
		name: '@bradwestfall',
		img: 'brad.png'
	}

  var context = {
      user: user,
      message: message
  }

  var textArea = $(this).parents('.compose').find('textarea');
  var message = textArea.val();

  // Source html for each template

  var tweetSource = $('#template-tweet').html();
  var threadSource = $('#template-thread').html();
  var composeSource = $('#template-compose').html();

  // Handlebars templates for inserting data into templates

  var tweetTemplate = Handlebars.compile(tweetSource);
  var threadTemplate = Handlebars.compile(threadSource);
  var composeTemplate = Handlebars.compile(composeSource);

  // State management 

	$('textarea').on('focus', function() { 
		$(this).parent().addClass('expand');
	});

  // State management
  $('.tweets').on('click', '.thread > .tweet', function() {   // toggleClass adds class if it was not there and removes 
  		$(this).parent().toggleClass('expand') // if it was. lightswitch					 		
  });										


    // renderTweet function
	  function renderTweet(user, message) {
			var context = {
				user: user,
				message: message
			}
			return tweetTemplate(context)
	  };

    // renderCompose function

    function renderCompose() {
      return composeTemplate()
      console.log('renderCompose works')
    };

    // renderThread(user, message)
    function renderThread(user, message) {
      return threadTemplate({
        tweet: renderTweet(user, message),
        compose: renderCompose()
      })
    }

    // Close/collapse an expanded top-level tweet active state
    $('main').on('click', '.compose > textarea', function() {
        $(this).parents('.compose').addClass('expand');
     });

      // call the renderTweet from here
      $('main').on('submit', '.compose', function(e) {
      		var textArea = $(this).find('textarea');
      		var message = textArea.val();
      		textArea.val('')

          if ($(this).parents('.replies').length) {
        		$(this).parents('.replies').append(renderTweet(user, message));
          }else {
            $('.tweets').append(renderThread(user, message))
          }
      		e.preventDefault();
      });

});