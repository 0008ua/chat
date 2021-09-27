const { mongoose } = require('../config/mongoose');
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const MsgSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author_id: {
    type: ObjectId,
    required: true,
  },
  room_id: {
    type: ObjectId,
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
    text, author_id: new ObjectId(author_id), room_id: new ObjectId(room_id),
  };
  console.log('message', message);
  return this.create(message);
};

MsgSchema.statics.getMsgs = function(query) {
  // console.log('query', query)
  return this.find(query);
};


module.exports.MsgModel = mongoose.model('messages', MsgSchema);
