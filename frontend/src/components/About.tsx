import React, {useContext} from 'react'
// const NoteContext = require("../context/notes/NoteContext")
import NoteContext from "../context/notes/NoteContext";


function About() {
    const a : any = useContext(NoteContext)
  return (
    <div>
      This is {a.name} and {a.class}
    </div>
  )
}

export default About
