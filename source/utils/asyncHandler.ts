import { RequestHandler, Request, Response, NextFunction } from 'express';

export default function (fn: RequestHandler) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            return await Promise.resolve(fn(req, res, next));
        } catch (error) {
            next(error);
        }
    };
}
