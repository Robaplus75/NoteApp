import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import "../Styles/NoteForm.css"

export default function CreateNotePage(){
    const navigate = useNavigate()
    const handleSubmit = (data)=>{
        console.log(data);
        navigate("/")
    }
    return (
    <div>
        <NoteForm Formtype="Create" handleSubmit={handleSubmit}/>
    </div>
    )
}