// Response Interfaces
interface ResJson {
	status?: number;
	message?: string;
}

export interface ResSuccessParams extends ResJson {
	results: any[] | Record<string, any> | null;
}

export interface ResErrorParams extends ResJson {
	errors: Record<string, any> | null;
}
