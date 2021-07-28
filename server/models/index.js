const { mongoose } = require('../config/mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
});


UserModel = mongoose.model('users', UserSchema);

module.exports = {
  UserModel,
};
