import { Router } from "express";
import { listItems, createItem } from "./data.js";
import { validateName } from "./utils.js";

const router = Router();

router.get("/items", (req, res) => {
  res.json({ items: listItems() });
});

router.post("/items", (req, res) => {
  const name = req.body?.name ?? "";
  const error = validateName(name);
  if (error) return res.status(400).send(error);

  const item = createItem(name.trim());
  res.status(201).json({ item });
});

export default router;
