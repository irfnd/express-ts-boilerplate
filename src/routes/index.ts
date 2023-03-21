import NotFoundRoutes from "@/routes/route.404";
import IndexRoutes from "@/routes/route.index";
import { Router } from "express";

const router = Router();

const defaultRoutes = [
	{ path: "/", route: IndexRoutes },
	{ path: "*", route: NotFoundRoutes },
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
