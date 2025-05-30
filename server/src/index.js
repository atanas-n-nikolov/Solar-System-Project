import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middleware/authMiddleware.js';
import getError from './utils/getError.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));

app.use(express.json());

app.use(cookieParser());

app.use(authMiddleware);

app.use(routes);

app.use(async (err, req, res, next) => {
  const { message, statusCode } = await getError(err);
  res.status(statusCode).json({ error: message });
});

const url = process.env.MONGO_URI || "mongodb://localhost:27017";
mongoose.connect(url, { dbName: 'Planets' })
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(`DB failed: ${err}`));

app.listen(3000, () => console.log('Server is listening on http://localhost:3000 ...'));
