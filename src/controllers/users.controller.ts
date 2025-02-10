import { Controller } from 'controllers/types';
import User from 'db/models/user';

export const create_user: Controller = async (req) => {
	const { body } = req;

	const user_to_insert = new User({
		name: {
			first: body.first_name,
			last: body.last_name
		},
		email: body.email
	});

	const new_user = await user_to_insert.save();

	return {
		message: 'OK',
		data: new_user,
		StatusCode: 200
	};
};

export const get_users: Controller = async () => {
	const users = await User.find({}).exec();

	return {
		message: 'OK',
		data: users,
		StatusCode: 200
	};
};
