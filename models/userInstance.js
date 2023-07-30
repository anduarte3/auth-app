const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserInstanceSchema = new Schema({
    user_id: { type: mongoose.Types.ObjectId, auto: true },
    status: { type: String },
});
  
// Virtual for book's URL
UserInstanceSchema.virtual("url").get(function () {
// We don't use an arrow function as we'll need the this object
    return `/in/${this._id}`;
});

// Export model
module.exports = mongoose.model("UserInstance", UserInstanceSchema);