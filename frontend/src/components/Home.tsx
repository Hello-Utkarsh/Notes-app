import React, { useContext, useState } from 'react'
import Notes from './Notes'
import NoteContext from '../context/notes/NoteContext';


const Home = () => {

  const context = useContext(NoteContext)
  const { addNote }: any = context;

  const [note, setNotes]: any = useState({title: "", description: ""})

  const handleclick = (e: any) => {
    e.preventDefault()
    addNote(note.title, note.description)
  }

  const onChange = (e: any) => {
    setNotes({...note, [e.target.name]: e.target.value})
  }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: '20px', justifyContent: 'center' }}>
      <h1>Add New Note</h1>
      <form style={{ margin: '30px 10px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="string" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="string" name='description' className="form-control" id="exampleInputPassword1" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add</button>
      </form>
      <div style={{ margin: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Your Notes</h1>
        <Notes />
      </div>
    </div>
  )
}

export default Home
