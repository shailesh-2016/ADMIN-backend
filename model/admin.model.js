const { Schema, model } = require("mongoose");

const common = {
  type: String,
  required: true,
  unique: true,
  trim: true,
};
const adminSchema = new Schema(
  {
    username: common,
    email: common,
    password: {
      ...common,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = model("admin", adminSchema);
module.exports = Admin;
