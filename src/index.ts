import express from "express";

// Types
import type { Express } from "express";

// App Init
const app: Express = express();
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`\n🚀 [Express] - Server running on port ${port}\n`);
});
