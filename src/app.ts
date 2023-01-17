import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/car.routes';
import motorcycleRoutes from './Routes/motorcycle.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
