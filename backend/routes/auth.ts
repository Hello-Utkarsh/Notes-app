import { body, query, validationResult } from "express-validator";
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post(
  "/",
  [
    body("name").isLength({ min: 3 }).withMessage("Enter a valid name"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Enter a password of atleast 5 character"),
  ],
  async (req: any, res: any) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({error: result.array()})
    }
    try {
      let user = User.findOne({ email: req.body.email });
      if (!user) {
        return res.json({ error: "a user of this email is already there" });
      }
      const salt = await bcrypt.genSaltSync(10);
      let secpassword = await bcrypt.hashSync(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpassword,
      });
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
);

module.exports = router;
