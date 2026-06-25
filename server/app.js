import express from "express";
import cors from "cors";
import router from "./Routes/chatRoutes.js";
import { configDotenv } from "dotenv";

const app = express();

configDotenv();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api", router);

export default app;
