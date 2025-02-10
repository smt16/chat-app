import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      first: { type: String, required: [true, 'Users must have a first name']},
      last: { type: String, required: [true, 'Users must have a last name']},
    },
    email: { type: String, required: [true, 'Users must have an email']},
    conversations: [{
      type: Schema.Types.ObjectId,
      ref: 'Conversation'
    }]
  },
  {
    virtuals: {
      full_name: {
        get() {
          return `${this.name?.first} ${this.name?.last}`;
        }
      }
    }
  }
);

const User = mongoose.model('User', UserSchema);
export default User;
