import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItems from './NoteItems';

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes }: any = context;

    return (
        <div className='' style={{display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "space-around", alignItems: "center", textAlign: "center"}}>
            {notes.map((note: any) => {
                return <NoteItems note = {note}/>
            })}
        </div>
    )
}

export default Notes
