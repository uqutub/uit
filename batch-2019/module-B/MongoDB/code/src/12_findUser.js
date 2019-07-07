const User = require('./07_userModel');

// finds all users with a name of joe
User.find({name: 'Joe'})
.then((users) => {
    // Return Array
    console.log('Users ', users);
})
.catch((err) => console.log('Err ', err));

// finds user with a name of joe
User.findOne({name: 'Joe'}) // or you can use { _id: 'whatEverId' }
.then((user) => {
    // Return One Object
    console.log('User ', user);
})
.catch((err) => console.log('Err ', err));