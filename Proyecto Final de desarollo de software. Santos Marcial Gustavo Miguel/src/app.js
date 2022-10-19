import express from 'express';
import morgan from 'morgan';

import { createRoles } from './libs/initialSetup.js';

import productsRoutes from './routes/products.routes.js';
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import saleRoutes from "./routes/sales.routes.js";
import branchRoutes from './routes/branch.routes.js';
import paymentRoutes from './routes/payment.routes.js';

import { application } from 'express';

const app = express();

createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req, res ) =>{
    res.json('welcome')
})

app.use('/api/products', productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/branch', branchRoutes);
app.use('/api/payment', paymentRoutes);

export default app;