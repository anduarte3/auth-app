const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, maxLength: 20 },
    email: { type: String, lowercase: true, required: true },
    member: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    // password: { type: String, required: true },
});
  

UserSchema.virtual("userLogin").get(function () {
// We don't use an arrow function as we'll need the this object
    // return `${this.name} <${this.email}>`;
});

// Export model
module.exports = mongoose.model("user", UserSchema);