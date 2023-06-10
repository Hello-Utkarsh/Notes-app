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
router.post("/addnotes", fetchuser,[
    body("title").isLength({ min: 3 }).withMessage("Enter a title of min length of 3 char"),
    body("description").isLength({ min: 5 }).withMessage("Enter a description of min length of 5 char"),
    
  ], async (req: any, res: any) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }

    const {title, description, date} = req.body

    try {

      let notes = new Notes({
        user: req.user.id,
        title: title,
        description: description,
        date: date
      })
      const savednotes = await notes.save()
      res.json(savednotes)
  
    } catch (error) {
  
      res.send(error);
  
    }
  });

module.exports = router;
