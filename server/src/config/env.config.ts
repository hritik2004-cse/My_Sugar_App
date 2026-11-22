import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URI, CLIENT_URL } = process.env;
const PORT = Number(process.env.PORT);

if (!MONGODB_URI) {
  throw new Error("MongoDB uri is not available");
}

if (!CLIENT_URL) {
  throw new Error("Client url is not available");
}

if (!Number.isInteger(PORT) || !PORT) {
  throw new Error("Port is not a number or not available");
}

const env = {
  port: PORT,
  clientUrl: CLIENT_URL,
  mongodbUri: MONGODB_URI,
};

export default env;
