import { resError } from "@/utils/response";

import type { NextFunction, Request, Response } from "express";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
	const params = { status: err?.cause?.code, message: err?.message, errors: err };
	res.status(err?.cause?.code ?? 500).json(resError(params));
}
