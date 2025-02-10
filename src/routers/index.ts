import { Controller } from 'controllers/types';
import { Request, Response } from 'express';

export const execute_controller = async (req: Request, res: Response, controller: Controller) => {
    const result = await controller(req, res);
    res.status(result.StatusCode).send({ message: result.message, data: result?.data || undefined });
};
