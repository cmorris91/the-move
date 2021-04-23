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

      feedback: {
        type: [String],
      },

      images: {
          type:[String],
        },
  
      rating: {
          type: [Number]
      },

      averageRating: {
        type: Number,
        default: 0
      }, 

      user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
      
});

eventSchema.methods.getRating = function() {
  let sum = 0
  for(var i = 0; i< this.rating.length; i++) {
    let sumResults = sum += this.rating[i]
    this.averageRating = sumResults / this.rating.length
  }
  return this.averageRating
};


  const Event = mongoose.model("Event", eventSchema,"events");

  module.exports = Event;