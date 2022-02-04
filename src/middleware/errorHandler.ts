import { Request, Response, NextFunction } from "express";
import status from "http-status";

const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) return next(error);

  res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
}

export default errorHandler;
