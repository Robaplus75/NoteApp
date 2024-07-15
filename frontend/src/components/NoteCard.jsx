import "../Styles/NavigationBar.css"
import "../Styles/NoteCard.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingBar from "./LoadingBar"
import api from '../api'

export default function NoteCard({id, title, content}){
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const deleteCard = async ()=>{
      try{
        setLoading(true)
        const response = await api.delete(`api/notes/${id}/`)
        console.log("Note Deleted!")
        navigate("/")

      }catch(error){
          if (error.response && error.response.status === 401){
              alert("Please LogIn First")
              localStorage.removeItem("authTokens")
              navigate("/login")
          }else{
              console.log("Sth went wrong")
              console.log(error)
              setLoading(false)
          }

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
          <Link><i className="fas fa-pen"></i></Link>

          <Link onClick={deleteCard}><i style={{marginLeft: 30 + 'px'}} className="fas fa-trash"></i></Link>
        </div>
      </div>
    );
}