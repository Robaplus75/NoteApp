import NoteForm from "../components/NoteForm";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { notesContext } from "../context/NotesContext";
import LoadingBar from "../components/LoadingBar";
import api from "../api";

export default function UpdateNotePage(){
    const navigate = useNavigate()
    const {state} = useLocation()
    const {setLoading, loading, getNotes} = useContext(notesContext)

    const UpdateNote = async (id, data)=>{
        setLoading(true)
        try{
            const response = await api.put(`api/notes/${id}/`, {title: data.title, content: data.content})
            if(response.status === 200){
                getNotes()
                console.log("note updated")
                navigate('/')
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

    const handleSubmit = async (data)=>{
        console.log(data);
        const response = await UpdateNote(state.id, data)
        if (response.status && response.status === 204){
            console.log("Note updated")
        } else if(response.status && response.status === 401){
            alert("Invalid Token: Please LogIn First")
            localStorage.removeItem("authTokens")
            navigate("/login")
        }else{
            console.log(response)
            console.log("update falied")
        }
    }
    return (loading? <LoadingBar /> : 
        <div>
            <NoteForm Formtype="Update" handleSubmit={handleSubmit} values={state}/>
        </div>
    )
}