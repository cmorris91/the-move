const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
      name: { type: String, required: true},

      host_name: {type: String},

      category: { type: String},

      description: { type: String},

      date: {  type: Date, default: Date.now},

      address: {type: String, require: true},

      city:{type: String, require: true},

      state: {type: String, require: true},

      zipcode: {type: String, require: true},

      date_created: {  type: Date, default: Date.now},

      // feedback: { 
      //     type: Schema.Types.ObjectId,
      //     ref: "Feedback" 
      // },

      images: {
          type: String
      },
  
      rating: {
          type: Number
      },

      user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
      
});

  const Event = mongoose.model("Event", eventSchema);

  module.exports = Event;