import "../Styles/AuthForm.css"
import { Link } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

export default function AuthForm({ handleSubmit, FormType }){
    const submit_click = (event)=>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        handleSubmit(data)
    }
    return (
        <div>
            <Toaster position="top-right"/>
            <div className="container">
            <div className="wrapper">
                <div className="title"><span>{FormType}</span></div>
                    <form onSubmit={submit_click}>
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input type="text" name="username" placeholder="Username" required />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                        {FormType === "Login" && <div className="pass"><a href="#">Forgot password?</a></div>}
                        <div className="row button">
                            <input type="submit" value={FormType === "Login" ? "Login": "Register"} />
                        </div>
                        {FormType === "Login" && <div className="signup-link">Not a member? <Link to="/signup">Signup now</Link></div>}
                        {FormType === "Signup" && <div className="signup-link">Already a member? <Link to="/login">Login</Link></div>}
                    </form>
            </div>
            </div>
        </div>
    )
}