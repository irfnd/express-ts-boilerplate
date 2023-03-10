import { z } from "zod";

const configs = z.object({
	port: z.number().nonnegative().optional().default(3000),
});

export default configs;
