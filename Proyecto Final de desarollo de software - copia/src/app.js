const express = require('express');
const morgan = require('morgan');

import { createRoles } from './libs/initialSetup';

import productsRoutes from './routes/products.routes';
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import saleRoutes from "./routes/sales.routes";
import branchRoutes from './routes/branch.routes';
import paymentRoutes from './routes/payment.routes';

import { application } from 'express';

const app = express()
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