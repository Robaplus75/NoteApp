import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import LoadingBar from "../components/LoadingBar";
import authContext from "../context/AuthContext";

export default function SignupPage(){
    const {signupUser} = useContext(authContext)
    const navigate = useNavigate()

    const handleSubmit = async(data)=>{
        const response = await signupUser(data)
        if (response && response.status === 201){
            navigate('/login')
        }

    }

    return (<AuthForm FormType={"Signup"} handleSubmit={handleSubmit}/>)
}