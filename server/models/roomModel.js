const { mongoose } = require('../config/mongoose');
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const RoomSchema = new Schema({
  members: {
    type: [mongoose.Types.ObjectId],
    required: true,
    validate: [membersLimit, 'Room members exceed the limit of 2'],
  },
  roomType: {
    type: String,
    required: true,
    enum: 'private',
  },
}, {
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});

function membersLimit(val) {
  return val.length <= 2;
}

RoomSchema.statics.checkRoomExists = function(users) {
  return this.find({ $and: [{ members: { $all: users } }, { members: { $size: users.length } }] });
};

RoomSchema.statics.getUserRooms = function(user_id) {
  // return this.find({ members: user_id});
  return this.aggregate([
    {
      '$match': {
        'members': new ObjectId(user_id),
      },
    }, {
      '$addFields': {
        'anotherUser_id': '$members',
      },
    }, {
      '$unwind': {
        'path': '$anotherUser_id',
      },
    }, {
      '$match': {
        'anotherUser_id': {
          '$ne': new ObjectId(user_id),
        },
      },
    }, {
      '$lookup': {
        'from': 'users',
        'localField': 'anotherUser_id',
        'foreignField': '_id',
        'as': 'anotherUser',
      },
    }, {
      '$unwind': {
        'path': '$anotherUser',
      },
    }, {
      '$project': {
        'anotherUser.password': 0,
        'anotherUser.createdAt': 0,
        'anotherUser.updatedAt': 0,
      },
    },
  ]);
};


module.exports.RoomModel = new mongoose.model('rooms', RoomSchema);

