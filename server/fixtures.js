// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var martinID = Meteor.users.insert({
    profile: { name: 'Martin Luther King, Jr.' }
  });
  var martin = Meteor.users.findOne(martinID);
  var donaldID = Meteor.users.insert({
    profile: { name: 'Donald Trump' }
  });
  var donald = Meteor.users.findOne(donaldID);
  
  var telescopeId = Posts.insert({
    title: 'Love',
    userId: donald._id,
    author: donald.profile.name,
    quote: 'I have decided to stick with love. Hate is too great a burden to bear.',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: martin._id,
    author: martin.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Donald, can I get involved?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: donald._id,
    author: donald.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Martin!'
  });
  
  Posts.insert({
    title: 'Meteor',
    userId: martin._id,
    author: martin.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    userId: martin._id,
    author: martin.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: donald.profile.name,
      userId: donald._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}