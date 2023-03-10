import { Router } from "express";
import IndexRoutes from "./route.index";
import NotFoundRoutes from "./route.404";

const router = Router();

const defaultRoutes = [
	{ path: "/", route: IndexRoutes },
	{ path: "*", route: NotFoundRoutes },
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
