import { IndexControllers } from "@/controllers";
import { Router } from "express";

const router = Router();

router.use("/", IndexControllers.notFound);

export default router;
