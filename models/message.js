const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    }
});
  
// Virtual for book's URL
MessageSchema.virtual("url").get(function () {
// We don't use an arrow function as we'll need the this object
    // return `${this.user}`;
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);