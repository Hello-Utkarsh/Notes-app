import { useState } from "react";
import NoteContext from "./NoteContext";

export const NoteState: any = (props: any) => {
    let initialNotes = [
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

    const [notes, setNotes] = useState(initialNotes)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
};