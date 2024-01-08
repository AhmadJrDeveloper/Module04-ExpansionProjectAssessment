// CATEGORY ROUTE.js
import {
    addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { Router } from "express";

const router = Router();

router.post("", addProduct);
router.get("", getAllProducts);
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct);

export default router;
