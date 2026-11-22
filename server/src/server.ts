import cors from "cors";
import express from "express";
import env from "./config/env.config.js";
import connectDB from "./config/db.config.js";
import dataRouter from "./route/data.route.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: env.clientUrl,
  }),
);

app.use("/data", dataRouter)
app.get("/health", (req, res) => {
  try {
    return res.status(200).json({ success: true, message: "Api is running!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.port, () => {
      console.log(`Server is running on port: ${env.port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`MongoDB error: ${error.name}`);
    }
  }
};

startServer();
