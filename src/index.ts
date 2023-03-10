import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import defaultRoutes from "./routes";
import errorHandler from "./middlewares/errors";

// Types
import type { Express } from "express";

// App Init
const app: Express = express();
const port = process.env.PORT ?? 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", defaultRoutes);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
	console.log(`\n🚀 [Express] - Server running on port ${port}\n`);
});
