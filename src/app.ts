import express, { Application, Request, Response } from 'express';
import urlRoutes from './routes/url.route';
import { notFoundHandler } from './middlewares/notFoundHandler';
const app: Application = express();

/*************** REGULAR MIDDLEWARE ***************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/***************** TEST ROUTE *****************/
app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Custom URL Shortener  Application!');
});

/***************** URL ROUTE *****************/
app.use('/api/v1', urlRoutes);

/*************** NOT FOUND ROUTE ***************/
app.use(notFoundHandler);

export default app;
