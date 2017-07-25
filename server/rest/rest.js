const _ = require('lodash');
const {User} = require('./../models/user');


//will be async soon
var asyncSignUp = (req, res) => {

  const user = new User(_.pick(req.body, ['email', 'password']));

  try {
    user.save();
    res.status(200).send(user);
  } catch(e) {
    res.status(400).send(e);
  }
}


module.exports = {
  asyncSignUp
}
