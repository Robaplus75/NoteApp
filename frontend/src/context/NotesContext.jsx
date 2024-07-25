import { createContext, useState } from "react";
import api from "../api";

export const notesContext = createContext()

export const NoteProvider = ({children})=>{
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    const getNotes = async ()=>{
        console.log("getting Notes...")
        setLoading(true)
        try{
            const response = await api.get("api/notes/")
            if(response.status === 200){
                setNotes(response.data)
                console.log("success")
            }
            return response
        }catch(error){
            if (error.response && error.response.status === 401){
                console.log(error.response.data)
                return error.response
            }else{
                console.log("Sth went wrong")
                console.log(error)
                return error
            }
        }finally{
            setLoading(false)
        }
    }

    const deleteNote = async (id)=>{
        setLoading(true)
        try{
            const response = await api.delete(`api/notes/${id}/`)
            console.log("Note Deleted!")
            getNotes()
            return response

          }catch(error){
              if (error.response && error.response.status === 401){
                  console.log(error.response.data)
                  return error.response
              }else{
                  console.log("Sth went wrong")
                  console.log(error)
                  return error
              }
          }finally{
            setLoading(false)
          }
    }

    const context = {
        notes: notes,
        loading: loading,
        setLoading: setLoading,
        setNotes: setNotes,
        deleteNote: deleteNote,
        getNotes: getNotes,
    }

    return (
    <notesContext.Provider value={context}>
        {children}
    </notesContext.Provider>)
}