const { default: mongoose } = require("mongoose");
const monngoose = require("mongoose");
const { title } = require("process");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },

    describtion: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },
    posstedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("job", jobSchema);
