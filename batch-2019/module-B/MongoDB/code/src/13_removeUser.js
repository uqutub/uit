const User = require('./07_userModel');

const joe = new User({
    name: 'Joe'
});

joe.save()
    .then(() => {

        // model instance remove (13b)
        joe.remove().then().catch(err);

        // class method remove
        User.remove({name: 'Joe'});     // also return promise


        // class method FindAndRemove
        User.findOneAndRemove({name: 'Joe'});     // also return promise


        // class method FindByIdAndRemove
        User.findByIdAndRemove(joe._id);     // also return promise


    })
    .catch((err) => console.log('Err ', err));