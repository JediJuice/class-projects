

$(function() {
    var root = 'http://jsonplaceholder.typicode.com'
 
//A) this is the handlebars template for the user that contains
//  the name and website. 
    var userTmpl = Handlebars.compile($('#user-template').html())

// this template is for the div with a class of user#post
    var postTmpl = Handlebars.compile($('#post-template').html())
// call the method get() with the root variable and concat the string
// users to the end which will grab the info from the website
    $.get(root + '/users')
    // call .then the anon function which creates users.
loop over every each. 
        .then(function(users){
            users.forEach(function (user){
                var context = {
                            id: "user" + user.id + "post",
                            author: user.name,
                            website: user.website
                        }
                $('main').append(userTmpl(context))
            $.get(root + '/users/' + user.id + '/posts')
                .then(function (userPosts) {
                    userPosts.forEach(function (userPost) {
                        var context = {
                            title: user.title,
                            body: userPost.body
                        }
                        $('#user' + user.id + 'post').append(postTmpl(context))
                        
                    })
                })  
            })
        })
        .fail(function (){
            console.log('I got an error!')
        })
})
