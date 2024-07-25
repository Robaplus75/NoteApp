import "../Styles/NavigationBar.css"
import "../Styles/NoteCard.css"
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import LoadingBar from "./LoadingBar"
import { notesContext } from "../context/NotesContext";

export default function NoteCard({id, title, content}){
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {deleteNote} = useContext(notesContext)

    const deleteCard = async ()=>{
      const response = await deleteNote(id)
      if (response.status && response.status === 204){
        console.log("Note deleted")
      } else if(response.status && response.status === 401){
        alert("Invalid Token: Please LogIn First")
        localStorage.removeItem("authTokens")
        navigate("/login")
      }else{
        console.log(response)
        console.log("delete falied")
      }
    }
    return (
      <div className="note-card">
        <div className="note-header">
          <h2>{title}</h2>
        </div>

        <div className="note-content">
          <p>{content}</p>
        </div>

        <div className="note-footer">
          <Link onClick={navigate('/updatenote', {state: {id:id, title:title, content:content} })}><i className="fas fa-pen"></i></Link>

          <Link onClick={deleteCard}><i style={{marginLeft: 30 + 'px'}} className="fas fa-trash"></i></Link>
        </div>
      </div>
    );
}