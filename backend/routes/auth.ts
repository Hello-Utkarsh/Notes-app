import { body, query, validationResult } from "express-validator";
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post(
  "/",
  [
    body("name").isLength({ min: 3 }).withMessage("Enter a valid name"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Enter a password of atleast 5 character"),
  ],
  (req: any, res: any) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then((user: any) => res.json(user))
      .catch((err: any) => res.send(err))
    }
  }
);

module.exports = router;
