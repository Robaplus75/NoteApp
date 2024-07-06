import AuthForm from "../components/AuthForm";
import { useState, useEffect } from "react";
import LoadingBar from "../components/LoadingBar";
import { useNavigate } from "react-router-dom";

export default function LogInPage(){
    const [loading, setLoading] = useState(true)
    const DelayTime = 500
    const navigate = useNavigate()

    const handleSubmit = (data)=>{
        console.log(data)
        navigate("/")
    }

    const Page = ()=> (loading) ? <LoadingBar /> : <AuthForm FormType={"Login"} handleSubmit={handleSubmit}/>

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, DelayTime);
    },[])

    return (Page())
}