import express from 'express'
import dotenv from 'dotenv'

import cookieParser from 'cookie-parser'
dotenv.config();
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import ConnectDB from './config/db.js';
const Port = process.env.PORT;


ConnectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('app is running...')
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);




app.listen(Port, () => console.log(`server is runn using ${Port}`))