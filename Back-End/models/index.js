import { dbConfig } from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import createProductModel from "./productModel.js";
import createUserModel from "./userModel.js";
import createCategoryModel from "./categoryModel.js";

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("connected to the database");
    })
    .catch(error => {
        console.error("error connecting: " + error);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Products = createProductModel(sequelize, DataTypes);
db.Users = createUserModel(sequelize, DataTypes);
db.Categories = createCategoryModel(sequelize, DataTypes);


db.Categories.hasMany(db.Products, {
    foreignKey: "category_id",
    as: "product"
});

db.Products.belongsTo(db.Categories, {
    foreignKey: "category_id",
    as: "category"
});

db.Users.hasMany(db.Products, {
    foreignKey: "user_id",
    as: "product"
});

db.Products.belongsTo(db.Users, {
    foreignKey: "user_id",
    as: "user"
});

export {db};