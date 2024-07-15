import AuthForm from "../components/AuthForm";
import { useState, useEffect } from "react";
import LoadingBar from "../components/LoadingBar";

export default function SignupPage(){
    const [loading, setLoading] = useState(true)

    const handleSubmit = (data)=>{
        console.log(data)
    }

    return (<AuthForm FormType={"Signup"} handleSubmit={handleSubmit}/>)
}