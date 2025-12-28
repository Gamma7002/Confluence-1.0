import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const incidentSchema = new mongoose.Schema({
  name: String,
  severity: String,
  timestamp: Date
});

export const User = mongoose.model("User", userSchema);
export const Incident = mongoose.model("Incident", incidentSchema);

