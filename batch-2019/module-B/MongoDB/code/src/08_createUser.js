const User = require('./07_userModel');

const joe = new User({ name: 'Joe' });

joe.save()
.then(() => {})
.catch((err) => console.log('Err ', err));