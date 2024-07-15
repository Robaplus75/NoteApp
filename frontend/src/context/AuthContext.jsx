import { createContext } from "react";
import api from "../api";

export const authContext = createContext()

export const AuthProvider = ({ children })=>{

    const loginUser = async (data) =>{
        console.log(data)
        try{
            const response = await api.post("api/token/",{
                username: data.username,
                password: data.password,
            })
            if (response.status == 200){
                localStorage.setItem('authTokens', JSON.stringify(response.data))
                console.log(response.data)
                return(response)
            }
        }catch(error){
            if (error.response === 401) {
                alert("Username or Password is Incorrect, Please retry")
                return(error.response)
            }else{
                alert("sth went wrong")
                return(error.response)
            }
        }
    }



    const context = {
        loginUser: loginUser,
    }
    return (
        <authContext.Provider value={context}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;