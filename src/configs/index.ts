import "dotenv/config";

import { ConfigSchema } from "../utils/validations";

const { PORT } = process.env;

const fromEnv = {
	port: PORT ? Number(PORT) : undefined,
};

export default ConfigSchema.parse(fromEnv);
