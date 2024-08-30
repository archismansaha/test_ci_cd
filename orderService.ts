import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.order' });

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/api/orders', (req: Request, res: Response) => {
  res.json({ message: process.env.RESPONSE });
});

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});
