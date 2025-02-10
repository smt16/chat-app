// import { init_db } from 'db/init';
import { connect } from 'db/init';
import express from 'express';
import expressWs from 'express-ws';

import { mount_routers } from './routers';

export default async () => {
	const app = express();
	const ews = expressWs(app).app;

	await connect();

	// global middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	
	ews.ws('/test/socket', (ws, req) => {
		ws.on('message', (msg) => {
			console.log('request for messages', msg);
		});
		console.log('socket', req.body);
	});
	mount_routers(app);


	app.listen(4040, () => {
		console.log('App listening on port 4040');
	});
};
