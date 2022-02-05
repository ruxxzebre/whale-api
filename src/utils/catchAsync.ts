import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 * That's because express does not actually support promises
 * If exception being thrown inside async fn, request just hangs out without response.
 */
export const catchAsync =
  (fn: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
