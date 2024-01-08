// CATEGORY ROUTE.js
import {
    addCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { Router } from "express";

const router = Router();

router.post("", addCategory);
router.get("", getAllCategories);
router.get("/:id", getOneCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
