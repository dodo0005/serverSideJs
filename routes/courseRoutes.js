import express from "express";
import { authCheck } from "../middleware/autMiddleware.js";
import {
  getAll,
  getOne,
  create,
  update,
  remove
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", authCheck, getAll);
router.get("/:id", authCheck, getOne);
router.post("/", authCheck, create);
router.put("/:id", authCheck, update);
router.delete("/:id", authCheck, remove);

export default router;