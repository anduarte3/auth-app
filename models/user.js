const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
});
  
// Virtual for book's URL
UserSchema.virtual("url").get(function () {
// We don't use an arrow function as we'll need the this object
    return `/in/${this._id}`;
});

// Export model
module.exports = mongoose.model("User", UserSchema);