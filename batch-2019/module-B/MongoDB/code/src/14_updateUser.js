const User = require('./07_userModel');

const joe = new User({
    name: 'Joe'
});

joe.save()
    .then(() => {

        // instance type using set n save
        joe.set('name', 'Alex');        
        // problem is, if we have many properties, 
        // we need to set many times like for AGE, ADDRESS and so on...
        joe.save();         // return Promise

        // instance can update
        joe.update({ name: 'Alex' });         // return Promise
        
        // class can update
        User.update({name: 'Joe'}, {name: 'Alex'});         // return Promise

        // class can update one record
        User.findOneAndUpdate({name: 'Joe'}, {name: 'Alex'});         // return Promise

        // class can find a record with an Id and update
        User.findByIdAndUpdate(joe._id, {name: 'Alex'});         // return Promise


    })
    .catch((err) => console.log('Err ', err));