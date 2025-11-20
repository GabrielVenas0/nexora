import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import authRoutes from "./routes/auth.Routes";
import { authenticate } from "./middlewares/auth.Middleware";

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

// Rotas de autenticação
app.use("/auth", authRoutes);

// Rota protegida
app.get("/protected", authenticate, (_req, res) => {
  res.json({ message: "Acesso permitido à rota protegida" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
