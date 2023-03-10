export interface ResSuccessParams {
	status?: number;
	message?: string;
	results: any[] | Record<string, any>;
}

export interface ResErrorParams {
	status?: number;
	message?: string;
	errors: Record<string, any> | null;
}
