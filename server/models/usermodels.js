const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    companyname: {
      type: String,
    },
    mobile: {
      type: String,
    },
    address: {
      type: String,
    },
    companyname: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Librarian", "User"],
    },
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
