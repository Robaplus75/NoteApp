import AuthForm from "../components/AuthForm";
import { useState, useEffect } from "react";
import LoadingBar from "../components/LoadingBar";

export default function LogInPage(){
    const [loading, setLoading] = useState(true)
    const DelayTime = 500

    const handleSubmit = (data)=>{
        console.log(data)
    }

    const Page = ()=> (loading) ? <LoadingBar /> : <AuthForm FormType={"Login"} handleSubmit={handleSubmit}/>

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, DelayTime);
    },[])

    return (Page())
}