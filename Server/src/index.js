import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "simple-web-app-server" });
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
