const mongoose = require("mongoose");
const { Schema } = mongoose;

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
      default: Date.now(),
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
