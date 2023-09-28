import cors from 'cors';
import express from 'express';
import { productRouter } from './routes/product.js';
import { cartRouter } from './routes/cart.js';
import { connetToDB } from './Dal/dbConnection.js';
import morgan from 'morgan';
const app = express();

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

app.use(productRouter);
app.use(cartRouter);

app.listen(3000,() =>{
    console.log('app is listening');
    connetToDB();
})

