import NoteCard from "./NoteCard";
import "../Styles/Notes.css"
import api from "../api";
import { useEffect, useState, useContext } from "react";
import { notesContext } from "../context/NotesContext";
import LoadingBar from "./LoadingBar";
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast'


export default function Notes(){
    const {getNotes, notes, setNotes, loading, setLoading} = useContext(notesContext)
    const isEmpty = notes.length === 0 ? true : false
    const navigate = useNavigate()

    const gettheNotes = async ()=>{
        const response = await getNotes()
        if(response.status && response.status === 401){
            toast.error("User Not Logged or Token Expired") 
            localStorage.removeItem("authTokens")
            navigate("/login")
          }else{
            console.log(response)
            console.log("Getting Notes Failed")
          }
    }


    useEffect(()=>{
        gettheNotes()
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