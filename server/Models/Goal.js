const mongoose = require("mongoose");
const {Schema} = mongoose;

const goalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completeBy: {
      type: Date,
      required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    completed: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
)

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;