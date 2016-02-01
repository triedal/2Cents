Template.layout.onRendered(function() {
  this.find('#main')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});

Template.layout.helpers({
  'showSubmit': function(){
    var pathName = Router.current().route.getName();
    if (pathName !== "newPosts" && pathName !== "bestPosts" && pathName !== "postPage" && pathName !== "home") {
      return true;
    }
  }
});