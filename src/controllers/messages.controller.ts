import { Controller } from './types';
import Conversation from 'db/models/conversation';
import User from 'db/models/user';

export const consume_line_message: Controller = async (req) => {
  const { body } = req;
  const owner_recipient_id_pair = build_owner_reciepient_id_pair(body.owner_id, body.recipient_id);

  const owner = await User.findOne({ email: body.user_email }).exec();
  const conversation_to_create = {
    owner: {
      user: owner?._id,
    },
    recipient: {
      name: body.recipient_name,
    },
    platform: 'line',
    owner_recipient_id_pair,
    messages: [
      { text: body.message, time: new Date(body.timestamp).getTime(), sender: body.sender }
    ]
  };

  // find conversation
  await Conversation.findOneAndUpdate({
    owner_recipient_id_pair
  }, conversation_to_create, { upsert: true });

  return {
    message: 'OK',
    StatusCode: 200
  };
};

const build_owner_reciepient_id_pair = (
  owner_id: string,
  recipient_id: string
) => {
  return `${owner_id}-${recipient_id}`;
};
