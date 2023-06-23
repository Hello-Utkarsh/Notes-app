import NoteContext from "./NoteContext";

export const NoteState: any = (props: any) => {
    const state = {
        "name": "Utkarsh",
        "class": "5b"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
};