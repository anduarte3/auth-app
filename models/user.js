const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, lowercase: true },
    password: { type: String }
    // member: { type: Boolean, default: false },
    // admin: { type: Boolean, default: false },
});
  
UserSchema.virtual("url").get(function () {
// We don't use an arrow function as we'll need the this object
    // return `${this.name} <${this.email}>`;
});

// Export model
module.exports = mongoose.model("user", UserSchema);