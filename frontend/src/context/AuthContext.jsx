import { createContext } from "react";
import api from "../api";

export const authContext = createContext()

export const AuthProvider = ({ children })=>{

    const signupUser = async (data) =>{
        console.log(data)
        try{
            const response = await api.post("api/signup/",{username: data.username, password: data.password})
            return response
        }catch (error) {
            if (error.response) {
              if (error.response.status === 400) {
                console.log('User already exists:', error.response.data);
              } else {
                console.log('Response error:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
              }
            } else if (error.request) {
              console.log('Request error:', error.request);
            } else {
              console.log('Error:', error.message);
            }
            console.log("Something went wrong");
          }
        
    }

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
        signupUser: signupUser,
    }
    return (
        <authContext.Provider value={context}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;