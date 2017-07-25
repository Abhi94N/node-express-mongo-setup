const {ObjectID} = require('mongodb');
const {User} = require('./../../models/user');
const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'abhilashnair1994@gmail.com',
  password: 'userOnePass'
}, {
  _id: userTwoId,
  email: 'abahsf@gmail.com',
  password: 'userTwoPass'
}];


const populateUsers = (done) => {
  User.remove({}).then(() => {
        //save runs the middleware to stored the has password
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        //wait till all promises are resolved
        return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {
  users, populateUsers
}
