import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongooseOptions: ConnectOptions = {
  dbName: 'app',
};

export async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, mongooseOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
