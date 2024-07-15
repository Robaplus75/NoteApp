import { createContext } from "react";

const notesContext = createContext()

const NoteProvider = ({children})=>{

    const context = {

    }

    return (
    <notesContext.Provider value={context}>
        {children}
    </notesContext.Provider>)
}