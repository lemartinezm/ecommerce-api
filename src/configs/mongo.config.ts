import mongoose from "mongoose";
import dotenv from 'dotenv';
import { ErrorLog, SuccessLog } from "../utils/Logs";
dotenv.config();

const DB_URI = process.env.DB_URI;

export default async function connectWithDB() {
  if (!DB_URI) ErrorLog('DB_URI not found in env variables');
  await mongoose.connect(DB_URI!);
  SuccessLog('Connected with DB')
}
