import { Router } from "express";
import { userAuthorization } from "../middleware/userAuthorization.js";
import {
  createContact,
  deleteContact,
  getAllContacts,
  updateContact,
  getInfo,
} from "../services/contacts.services.js";

const router = Router();

router.get("/", getAllContacts);

router.get("/info", getInfo);

router.post("/", createContact);

router.put("/:id", userAuthorization, updateContact);

router.delete("/:id", userAuthorization, deleteContact);

export default router;
