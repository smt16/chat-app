import { Controller } from 'controllers/types';
import { Request, Response } from 'express';
import UserRouter from 'routers/user.router';
import MessageRouter from 'routers/message.router';
import express from 'express';

export const mount_routers = (app: express.Application) => {
	app.use('/users', UserRouter);
	app.use('/messages', MessageRouter);
};

export const execute_controller = async (req: Request, res: Response, controller: Controller) => {
  const result = await controller(req);
  res.status(result.StatusCode).send({ message: result.message, data: result?.data || undefined });
};
