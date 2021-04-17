const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "myPerson",
  },

  textone: {
    type: String,
    required: true,
  },

  textTwo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "myProfile",
  },
  upvotes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "myPerson",
      },
    },
  ],
  answers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "myPerson",
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Question = mongoose.model("myQuestion", QuestionSchema);
