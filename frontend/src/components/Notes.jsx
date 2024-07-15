import NoteCard from "./NoteCard";
import "../Styles/Notes.css"
import api from "../api";
import { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar";
import { useNavigate, Link } from "react-router-dom";


export default function Notes(){
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const isEmpty = notes.length === 0 ? true : false
    const navigate = useNavigate()

    const getNotes = async ()=>{
        console.log("getting Notes...")
        setLoading(true)
        try{
            const response = await api.get("api/notes/")
            if(response.status === 200){
                setNotes(response.data)
                setLoading(false)
                console.log("success")
            }
        }catch(error){
            if (error.response.status === 401){
                alert("Please LogIn First")
                localStorage.removeItem("authTokens")
                navigate("/login")
            }
        }
    }

    useEffect(()=>{
        getNotes()
    },[])

    if (isEmpty){
        return <div className="CreateNoteBtn"><Link className="link" to="/createnote">Begin Creating Notes</Link></div>
    }
    
    return (
        loading ? <LoadingBar />:
        <div className="notes">
            {notes.map((note)=><NoteCard key={note.id} id={note.id} title={note.title} content={note.content}/>)}
        </div>
    )
}