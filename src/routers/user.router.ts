import express from 'express';
import { create_user, get_users } from 'controllers/users.controller';
import { execute_controller } from '.';

const UserRouter = express.Router();

// create a new user
UserRouter.post('/', (req, res) => execute_controller(req, res, create_user));

// Return list of users
UserRouter.get('/', (req, res) => execute_controller(req, res, get_users));

export default UserRouter;
