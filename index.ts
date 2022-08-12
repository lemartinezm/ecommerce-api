import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectWithDB from "./src/configs/mongo.config";
import Items from "./src/models/items.entity";
import { ErrorLog } from "./src/utils/Logs";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

connectWithDB();

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
});

app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await Items.find();
    return res.status(200).send({
      data: response
    })
  } catch (error) {
    ErrorLog(error);
    return res.status(400).send({
      message: 'Something went wrong'
    })
  }
});

app.post('/', async (req: Request, res: Response) => {
  const { id, name, sizes, category, price, quantity, imageSrc } = req?.body;

  try {
    const response = await Items.create({ id, name, sizes, category, price, quantity, imageSrc })
    return res.status(201).send({
      item: response
    })
  } catch (error) {
    ErrorLog(error);
    return res.status(400).send({
      message: 'Something went wrong'
    })
  }
})