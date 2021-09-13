const { mongoose } = require('../config/mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  room_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  // modifiedAt: {
  //   type: Number,
  //   default: () => Date.now(),
  // },
  // createdAt: {
  //   type: Number,
  //   default: () => Date.now(),
  // },
},
{
  timestamps: true,
});

MsgSchema.statics.createMsg = function({
  text,
  author_id,
  room_id,
}) {
  const message = {
    text, author_id, room_id,
  };
  return this.create(message);
};

MsgSchema.statics.getMsgs = function(query) {
  return this.find(query);
};


module.exports.MsgModel = mongoose.model('messages', MsgSchema);
