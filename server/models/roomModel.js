const { mongoose } = require('../config/mongoose');
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const RoomSchema = new Schema({
  membersInfo: {
    type: [{
      member_id: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
      readedUntil: {
        type: Number,
        default: () => Date.now(),
      },
      unreadedMessagesQty: {
        type: Number,
        default: 0,
      },
    }],
    validate: [membersLimit, 'Room members exceed the limit of 2'],
  },
  // members: {
  //   type: [mongoose.Types.ObjectId],
  //   // required: true,
  //   validate: [membersLimit, 'Room members exceed the limit of 2'],
  // },
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
  console.log('users', users);
  return this.find({
    '$and': [
      {
        'membersInfo': {
          '$elemMatch': {
            'member_id': new ObjectId(users[0]),
          },
        },
      }, {
        'membersInfo': {
          '$elemMatch': {
            'member_id': new ObjectId(users[1]),
          },
        },
      }, {
        'membersInfo': {
          '$size': 2,
        },
      },
    ],
  });
  // return this.find({ $and: [{ members: { $all: users } }, { members: { $size: users.length } }] });
};

RoomSchema.statics.udateReadedUntil = function(room_id, user_id) {
  return this.findOneAndUpdate(
    { '_id': new ObjectId(room_id), 'membersInfo.member_id': new ObjectId(user_id) },
    { $set: { 'membersInfo.$.readedUntil': new Date() } },
    {
      useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
      new: true, // Return NEW document after updates are applied, by default old
      rawResult: false,
    }
  );
};

// RoomSchema.statics.getUreadedeMessagesQty = function(room_id, user_id) {
//   return 5;
// };

RoomSchema.statics.getUserRooms = function(user_id) {
  return this.aggregate([
    {
      '$match': {
        'membersInfo.member_id': new ObjectId(user_id),
      },
    }, {
      '$addFields': {
        'anotherUser_': '$membersInfo',
      },
    }, {
      '$unwind': {
        'path': '$anotherUser_',
      },
    }, {
      '$match': {
        'anotherUser_.member_id': {
          '$ne': new ObjectId(user_id),
        },
      },
    }, {
      '$lookup': {
        'from': 'users',
        'localField': 'anotherUser_.member_id',
        'foreignField': '_id',
        'as': 'anotherUser',
      },
    }, {
      '$unwind': {
        'path': '$anotherUser',
      },
    }, {
      '$project': {
        'anotherUser_': 0,
        'anotherUser.password': 0,
        'anotherUser.createdAt': 0,
        'anotherUser.updatedAt': 0,
      },
    },
  ]);
};


module.exports.RoomModel = new mongoose.model('rooms', RoomSchema);


