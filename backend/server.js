import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import productRoutes from './routes/productRoutes.js'
import ConnectDB from './config/db.js';
const Port = process.env.PORT;


ConnectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('app is running...')
});

app.use('/api/products', productRoutes);




app.listen(Port, () => console.log(`server is runn using ${Port}`))