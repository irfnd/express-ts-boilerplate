import httpStatus from "http-status";

import type { ResSuccessParams, ResErrorParams } from "./interfaces/Response";

export const resSuccess = (params: ResSuccessParams): any => ({
	status: params.status ?? httpStatus.OK,
	message: params.message ?? "Request Success!",
	results: params.results,
});

export const resError = (params: ResErrorParams): any => ({
	status: params.status ?? httpStatus.INTERNAL_SERVER_ERROR,
	message: params.message ?? "Request Failed!",
	errors: params.errors,
});

export default {
	resSuccess,
	resError,
};
