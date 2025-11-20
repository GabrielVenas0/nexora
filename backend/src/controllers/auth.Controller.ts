import { Request, Response } from "express";
import { users } from "../models/user.Model";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Usuário ou senha inválido" });
  }

  const token = "fake-jwt";

  return res.json({ message: "Login bem-sucessido", token });
};
