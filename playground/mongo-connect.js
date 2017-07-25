const mongodb = require('mongodb');
const {MongoClient} = require('mongodb');

const mongoURL = 'mongodb://localhost:27017/TestApp';



module.export  = async RepoConnect(url) => {

  try {
    return await MongoClient.connect(url);

  } catch(e) {
      throw Error('Unable to connect to database');
  }
}
