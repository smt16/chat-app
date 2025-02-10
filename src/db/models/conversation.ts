import mongoose from 'mongoose';

const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    owner_recipient_id_pair: String,
    owner: {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    recipient: {
      name: { type: String, required: [true, 'Conversation recipient must have a name'] },
      platform_id: { type: String, required: [true, 'Conversation recipient must have an ID linking them to the platform'] },
    },
    messages: [{ 
      text: String,
      time: Number,
      sender: String   
    }],
    platform: { type: String, enum: ['line', 'facebook'], required: [true, 'Conversations must have a platform'] }
  }
);

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;
