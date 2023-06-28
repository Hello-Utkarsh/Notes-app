import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItems from './NoteItems';

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, addNote }: any = context;

    return (
        <div style={{display: "grid", width:'97vw', gridTemplateColumns: "auto auto auto", justifyContent: "space-around", alignItems: "center", margin: '20px 10px'}}>
            {notes.map((note: any) => {
                return <NoteItems note = {note}/>
            })}
        </div>
    )
}

export default Notes
