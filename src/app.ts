import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/car.routes';
import motorcyclesRoutes from './Routes/motorcycle.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcyclesRoutes);
app.use(ErrorHandler.handle);

export default app;
