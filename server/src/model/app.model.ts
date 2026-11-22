import mongoose from "mongoose";
import type { IData } from "../types/dataModel.types.js";

const dataSchema = new mongoose.Schema<IData>(
  {
    reading: { type: Number, required: true, min: 1 },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const Data = (mongoose.models.Data as mongoose.Model<IData>) ?? mongoose.model<IData>("Data", dataSchema);
export default Data;
