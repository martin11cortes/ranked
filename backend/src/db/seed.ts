import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import dotenv from "dotenv";
import { mongooseOptions } from "./db";
dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, mongooseOptions);
    await User.deleteMany({});
    const users = [
      {
        username: "alice",
        password: await bcrypt.hash("password1", 10),
      },
      {
        username: "bob",
        password: await bcrypt.hash("password2", 10),
      },
      {
        username: "charlie",
        password: await bcrypt.hash("password3", 10),
      },
      {
        username: "david",
        password: await bcrypt.hash("password4", 10),
      },
    ];
    await User.insertMany(users);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
