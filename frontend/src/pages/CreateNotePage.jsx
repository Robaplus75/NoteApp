import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import "../Styles/NoteForm.css"
import api from "../api.js";

export default function CreateNotePage(){
    const navigate = useNavigate()
    const handleSubmit = async (data)=>{
        console.log(data);
        try{
            const response = await api.post('api/notes/',{
                title: data.title,
                content: data.content
            })
            console.log("Note Created!")
            navigate("/")

        }catch(error){
            if (error.response.status === 401){
                alert("Please LogIn First")
                localStorage.removeItem("authTokens")
                navigate("/login")
            }else{
                console.log("Sth went wrong")
            }

        }
    }
    return (
    <div>
        <NoteForm Formtype="Create" handleSubmit={handleSubmit}/>
    </div>
    )
}