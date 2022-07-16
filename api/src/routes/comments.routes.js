import { Router } from "express";
import { userAuthorization } from "../middleware/userAuthorization.js";
import {
  removeComment,
  createComment,
  updateComment,
} from "../services/comments.services.js";

const router = Router();

router.post("/", createComment);

router.put("/", userAuthorization, updateComment);

router.delete("/", userAuthorization, removeComment);

export default router;
