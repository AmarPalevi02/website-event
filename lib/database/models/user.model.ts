import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
   clerkId: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: [true, 'Email must be filled in!'],
      unique: true,
   },
   username: {
      type: String,
      require: [true, 'User Name must be filled in!'],
      unique: true
   },
   firstName: {
      type: String,
      required: [true, 'Frist Name must be filled in!']
   },
   lastNmae: {
      type: String,
      required: [true, 'Last Name must be filled in!']
   },
   photo: {
      type: String,
      required: true
   }
})

const User = models.User || model('User', UserSchema)

export default User