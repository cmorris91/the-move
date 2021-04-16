const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// class User extends Model {
//     checkPassword(loginPw) {
//       return bcrypt.compareSync(loginPw, this.password);
//     }
//   }

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

    UserSchema.methods.beforeCreate = function () {
        this.password = bcrypt.hash(this.password, 10);
        return this.password;
      };
    
      UserSchema.methods.beforeUpdate = function () {
        this.password = bcrypt.hash(this.password, 10);
        return this.password;
      };

  
const User = mongoose.model("User", UserSchema);

module.exports = User;