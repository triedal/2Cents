Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      quote: $(e.target).find('[name=quote]').val(),
      tag: Router.current().route.getName().slice(0,-5)
    };
    
    var errors = validatePost(post);
    if (errors.quote)
      return Session.set('postSubmitErrors', errors);
    
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anywa
      if (result.postExists)
        throwError('This has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});