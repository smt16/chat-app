// import { init_db } from 'db/init';
import { connect } from 'db/init';
import express from 'express';
import UserRouter from 'routers/user.router';
import MessageRouter from 'routers/message.router';

export default async () => {
	const app = express();

	await connect();

	// global middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	
	app.use('/users', UserRouter);
	app.use('/messages', MessageRouter);

	app.listen(4040, () => {
		console.log('App listening on port 4040');
	});
};
