import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://forenyx:confluence@forenyx.5isrqyy.mongodb.net/forenyx?retryWrites=true&w=majority",
  {
    dbName: "forenyx",
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use("/api", router);

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));


