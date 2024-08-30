import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.user' });

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/api/users', (req: Request, res: Response) => {
  res.json({ message: process.env.RESPONSE });
});

app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});
