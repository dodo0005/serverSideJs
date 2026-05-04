import mongoose from "mongoose";

export function validateId(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  next();
}

import fs from "fs";

export function validateStudent(req, res, next) {
  const { name, email, major, gpa } = req.body;

  const reject = (message) => {
    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }
    return res.status(400).json({ message });
  };

  if (!name) return reject("Name is required");
  if (!email) return reject("Email is required");
  if (!major) return reject("Major is required");
  if (gpa === undefined) return reject("GPA is required");

  if (gpa < 0 || gpa > 4)
    return reject("GPA must be between 0 and 4");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return reject("Email is not valid");

  next();
}