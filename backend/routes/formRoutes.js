import express from "express";
import { handleFormSubmission } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", handleFormSubmission);

export default router;