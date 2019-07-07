const User = require('./07_userModel');

const joe = new User({
    name: 'Joe'
});

joe.save()
    .then(() => {
        
        // joe.set('postCount', 1);
        // joe.save();

        // User.update({name: 'Joe'}, {postCount: 1});


        //// user can have their postcount incremented by 1
        User.update({name: 'Joe'}, {$inc: { postCount: 1} });   // return promise
    });