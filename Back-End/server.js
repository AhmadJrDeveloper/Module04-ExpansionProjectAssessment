import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import {db} from './models/index.js';
import categoryRoute from './routes/categoryRoute.js'
import AuthRoute from './routes/userRoute.js'
import ProductRoute from './routes/productRoute.js'

dotenv.config()
 const app = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(cookieParser());
 const corsOptions = {
     origin: 'http://localhost:3000', 
     credentials: true, 
     optionsSuccessStatus: 200
 };

 app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
 
 app.use(cors(corsOptions));
 const port = process.env.PORT;

 app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

app.use("/categories", categoryRoute);
app.use("/auth",AuthRoute);
app.use("/products", ProductRoute);