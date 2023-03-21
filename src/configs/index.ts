import { ConfigSchema } from "@/validations";
import "dotenv/config";

const fromEnv = ConfigSchema.parse({
	port: process.env.PORT ? Number(process.env.PORT) : undefined,
});

const config = {
	server: { port: fromEnv.port },
};

export default config;
