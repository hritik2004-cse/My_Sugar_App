import mongoose from "mongoose";
import env from "./env.config.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(env.mongodbUri);
    console.log(`MongoDB connected on: ${connectionInstance.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`MongoDB Error: ${error.name}`);
    }
  }
};

export default connectDB;