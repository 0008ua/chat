const { mongoose } = require('../config/mongoose');
const Schema = mongoose.Schema;
mongoose.Types
const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'guest', 'user'],
    default: 'user',
  },
}, {
  // collection: 'users',
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});

UserSchema.statics.createUser = function(user) {
  return this.create(user);
};

module.exports.UserModel = mongoose.model('users', UserSchema);
