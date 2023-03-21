import httpStatus from "http-status";

import type { ResErrorParams, ResSuccessParams } from "@/utils/types";

export const resSuccess = (params: ResSuccessParams): ResSuccessParams => {
	const { status = httpStatus.OK, message = "Request Success!", results = null } = params;
	return { status, message, results };
};

export const resError = (params: ResErrorParams): ResErrorParams => {
	const { status = httpStatus.INTERNAL_SERVER_ERROR, message = "Request Failed!", errors = null } = params;
	return { status, message, errors };
};

export default {
	resSuccess,
	resError,
};
