const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// class User extends Model {
//     checkPassword(loginPw) {
//       return bcrypt.compareSync(loginPw, this.password);
//     }
//   }

  const userSchema = new Schema({
      name: { type: DataTypes.String, required: false},

      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      password: {
        type: String,
        required: false,
        validate: {
          len: [8],
        },
      },
    })

    UserSchema.methods.beforeCreate = function () {
        this.password = bcrypt.hash(this.password, 10);
        return this.password;
      };
    
      UserSchema.methods.beforeUpdate = function () {
        this.password = bcrypt.hash(this.password, 10);
        return this.password;
      };

  
const User = mongoose.model("User", userSchema);

module.exports = User;