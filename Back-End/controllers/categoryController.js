// categoryController.js
import { db } from "../models/index.js";

const Category = db.Categories;

// 1. Create new category
const addCategory = async (req, res) => {
  let info = {
    name: req.body.name,
  };

  try {
    const category = await Category.create(info);
    res.status(200).send(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send(error.message);
  }
};

// 2. get all categorys
const getAllCategories = async (req, res) => {
  try {
    let category = await Category.findAll({});
    if (category.length === 0) {
      res.status(404).send({ message: "No Categories in the database" });
      return;
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
    console.error("Error getting all categories");
  }
};

// 3. get single category
const getOneCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let category = await Category.findOne({ where: { id: id } });
    if (category === null) {
      res
        .status(404)
        .send({ message: "No category with this ID in the database" });
      return;
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
    console.error("Error getting single category");
  }
};

// 4. update category
const updateCategory = async (req, res) => {
  try {
    let id = req.params.id;
    const category = await Category.update(req.body, { where: { id: id } });
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Error updating category");
  }
};

// 5. delete category
const deleteCategory = async (req, res) => {
  try {
    let id = req.params.id;
    await Category.destroy({ where: { id: id } });
    res.status(200).send("category deleted");
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Error deleting category");
  }
};

export {
  addCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
