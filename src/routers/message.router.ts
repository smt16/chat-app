import express from 'express';
import { consume_line_message } from 'controllers/messages.controller';
import { execute_controller } from '.';

const MessageRouter = express.Router({ mergeParams: true });

// webhook endpoints for consuming messages
MessageRouter.post('/line', (req, res) => execute_controller(req, res, consume_line_message));

export default MessageRouter;
