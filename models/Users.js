const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require ('bcrypt');

  const UsersSchema = new Schema({
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

    UsersSchema.pre('save', function (next) {
        const user = this;
      
        if (!user.isModified('password')) {
          return next();
        }
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return next(err);
          bcrypt.hash(user.password, salt, (hashErr, hash) => {
            if (hashErr) return next(hashErr);  
            user.password = hash;
            next();
          });
        });
      });

      UsersSchema.methods.checkPassword = function(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      };
      
    // class User extends Model {
//     checkPassword(loginPw) {
//       return bcrypt.compareSync(loginPw, this.password);
//     }
//   }

  
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;