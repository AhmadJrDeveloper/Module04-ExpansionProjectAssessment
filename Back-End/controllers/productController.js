// categoryController.js
import { db } from "../models/index.js";

const Product = db.Products;

// 1. Create new category
const addProduct = async (req, res) => {
    const { title, category_id,description
    ,price,user_id } = req.body;


  try {
    const product = await User.create({ title, category_id,description
        ,price,user_id });
    res.status(200).send(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send(error.message);
  }
};

// 2. get all products
const getAllProducts = async (req, res) => {
  try {
    let product = await Product.findAll({});
    if (product.length === 0) {
      res.status(404).send({ message: "No products in the database" });
      return;
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
    console.error("Error getting all products");
  }
};

// 3. get single product
const getOneProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id: id } });
    if (product === null) {
      res
        .status(404)
        .send({ message: "No product with this ID in the database" });
      return;
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
    console.error("Error getting single product");
  }
};

// 4. update product
const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Error updating product");
  }
};

// 5. delete product
const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("product deleted");
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Error deleting product");
  }
};

export {
    addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
