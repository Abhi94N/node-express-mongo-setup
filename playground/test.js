const {RepoConnect} = require('./mongo-connect');
const mongoURL = 'mongodb://localhost:27017/TestApp';

console.log(RepoConnect);
// RepoConnect(mongoURL).then((db) => {
//   db.collection('Users').insertOne({user:'Abhi'});
//   db.close();
// });
