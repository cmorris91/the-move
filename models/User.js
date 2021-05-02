const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require ('bcrypt');

  const UserSchema = new Schema({
      name: { type: String, required: false},

      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },

      password: {
        type: String,
        required: false,
        validate: [
          ({length}) => length >= 6,
          "Password should be longer."
        ],
      },

      events: {
        type: Schema.Types.ObjectId,
        ref: "Event"
      }
    })



  
const User = mongoose.model("User", UserSchema);

module.exports = User;