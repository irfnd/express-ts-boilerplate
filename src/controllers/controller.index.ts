import httpStatus from "http-status";
import { resSuccess } from "../utils/response";

import type { Request, Response, NextFunction } from "express";

export const getIndex = (req: Request, res: Response, next: NextFunction): void => {
	const results = {
		message: "Welcome to Express TS",
		author: "Irfnd <irfandiabimanyu@gmail.com>",
		github: "https://github.com/irfnd",
	};
	res.json(resSuccess({ results }));
};

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
	next(new Error("Route not found!", { cause: { code: httpStatus.NOT_FOUND } }));
};

export default {
	getIndex,
	notFound,
};
