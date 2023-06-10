const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
import { body, query, validationResult } from "express-validator";

// fetching notes
router.get("/fetchnotes", fetchuser, async (req: any, res: any) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.send(error);
  }
});

// adding notes
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title")
      .isLength({ min: 3 })
      .withMessage("Enter a title of min length of 3 char"),
    body("description")
      .isLength({ min: 5 })
      .withMessage("Enter a description of min length of 5 char"),
  ],
  async (req: any, res: any) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      console.log("hel");

      return res.status(400).json({ error: result.array() });
    }
    // checking if any note of similar title or description is already present or not
    let exist_title = await Notes.findOne({ title: req.body.title });
    let exist_description = await Notes.findOne({
      description: req.body.description,
    });
    if (exist_description || exist_title) {
      return res.json({
        error: "A note with similar data was found. Please add a new note",
      });
    }

    let { title, description, date } = req.body;

    try {
        // creating new note
      let notes = new Notes({
        user: req.user.id,
        title: title,
        description: description,
        date: date,
      });

    //   saving the note to mongodb
      const savednotes = await notes.save();
      res.json(savednotes);

    } catch (error: any) {
      res.send(error.message);
    }
  }
);

module.exports = router;
