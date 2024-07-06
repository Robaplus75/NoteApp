import NoteForm from "../components/NoteForm";
import { useNavigate } from "react-router-dom";

export default function UpdateNotePage(){
    const navigate = useNavigate()
    const handleSubmit = (data)=>{
        console.log(data);
        navigate("/")
    }
    return (
        <div>
            <NoteForm Formtype="Update" handleSubmit={handleSubmit}/>
        </div>
    )
}