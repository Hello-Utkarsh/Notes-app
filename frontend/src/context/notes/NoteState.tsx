import { useState } from "react";
import NoteContext from "./NoteContext";

export const NoteState: any = (props: any) => {
    let initialNotes = [
        {
            "_id": "648407749a7eb5a9b4ef40d",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile2",
            "description": "do it very very fast",
            "date": "2023-06-10T05:17:40.596Z",
            "__v": 0
        },
        {
            "_id": "648407968a45c067695072d3",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile22",
            "description": "do it very very2 fast",
            "date": "2023-06-10T05:18:14.783Z",
            "__v": 0
        },
        {
            "_id": "648407749a7eb5a9b4ef40",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile2",
            "description": "do it very very fast",
            "date": "2023-06-10T05:17:40.596Z",
            "__v": 0
        },
        {
            "_id": "648407968a45c06769507",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile22",
            "description": "do it very very2 fast",
            "date": "2023-06-10T05:18:14.783Z",
            "__v": 0
        },
        {
            "_id": "648407749a7eb5a9b4ef40d2",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile2",
            "description": "do it very very fast",
            "date": "2023-06-10T05:17:40.596Z",
            "__v": 0
        },
        {
            "_id": "648407968a45c067695072d3",
            "user": "6483ea137c29b8c6621ad35b",
            "title": "mytitile22",
            "description": "do it very very2 fast",
            "date": "2023-06-10T05:18:14.783Z",
            "__v": 0
        },
    ]

    const [notes, setNotes]: any = useState(initialNotes)

    const addNote = (title: string, description: string)=>{
        const note = {
            "_id": "648407968a45c067695072d3",
            "user": "6483ea137c29b8c6621ad35b",
            "title": title,
            "description": description,
            "date": "2023-06-10T05:18:14.783Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    const deleteNote = (id: string)=> {
        const newNote = notes.filter((note: any)=>{return note._id !== id})
        setNotes(newNote)
    }

    const editNote = ()=>{

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
};