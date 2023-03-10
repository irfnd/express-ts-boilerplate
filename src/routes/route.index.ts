import { Router } from "express";
import { IndexControllers } from "../controllers";

const router = Router();

router.use("/", IndexControllers.getIndex);

export default router;
