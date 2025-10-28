import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
