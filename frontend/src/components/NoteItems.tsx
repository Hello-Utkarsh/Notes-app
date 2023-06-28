import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

const NoteItems = (props: any) => {
  const { note } = props
  const context = useContext(NoteContext)
  const {deleteNote}: any = context
  const handle_delete = () => {
    deleteNote(note._id)
  }

  return (
    <div className='container-flex-col' style={{ margin: "20px auto" }}>
      <h3 style={{ margin: "10px 5px" }}>{note.title}</h3>
      <p style={{ textAlign: "start" }}>{note.description}.</p>
      <div style={{display: "flex", width: "60px", justifyContent: "space-between"}}>
        <span className="material-symbols-outlined" style={{cursor: "pointer"}}>
          edit
        </span>
        <span onClick={handle_delete} className="material-symbols-outlined" style={{cursor: "pointer"}}>
          delete
        </span>
      </div>
    </div>
  )
}

export default NoteItems
