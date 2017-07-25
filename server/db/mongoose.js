var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //can configure to use promises that are built in
//mongoose handles connection prior to scheduling any queries

//add path variable later

mongoose.connect(process.env.MONGODB_URI);//now is forced to use config.json

module.export = {mongoose};
