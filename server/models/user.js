const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      isAsync: false,
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  }
  // tokens: [{//mongodb only
  //   access: {
  //     type: String,
  //     required: true
  //   },
  //   token: {
  //     type: String,
  //     required: true
  //   }
  // }]
});

//serial creation of tokens through middleware
// UserSchema.pre('save', () => {
//   console.log('Token Created');
//   next();
// });


var User = mongoose.model('User', UserSchema);

module.exports = {User}
