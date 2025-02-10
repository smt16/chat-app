import { Request } from 'express';

export type Controller = (req: Request) => Promise<ControllerResposne>;

export type ControllerResposne = {
  StatusCode: number,
  message: string,
  /* eslint-disable  @typescript-eslint/no-explicit-any */    
  data?: any
};

export type Message = {
  text: string,
  time: number
}
