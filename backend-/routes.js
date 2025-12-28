import express from "express";
import { User, Incident } from "./models.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.json({ success: true });
  else res.json({ success: false });
});

router.get("/incidents", async (req, res) => {
  const incidents = await Incident.find();
  res.json(incidents);
});

export default router;
