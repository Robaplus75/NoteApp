import AuthForm from "../components/AuthForm";
import { useState, useContext} from "react";
import LoadingBar from "../components/LoadingBar";
import { useNavigate } from "react-router-dom";
import authContext from "../context/AuthContext";


export default function LogInPage(){
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {loginUser} = useContext(authContext)

    const handleSubmit = async (data)=>{
        setLoading(true)
        const response = await loginUser(data)
        if (response.status === 200){
            navigate('/')
        }
        setLoading(false)
    }

    return (loading ? <LoadingBar /> : <AuthForm FormType={"Login"} handleSubmit={handleSubmit}/>)
}