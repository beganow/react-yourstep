import { Link } from "react-router-dom"
import { SignUp } from "../Components/SignUp"

const RegisterPage = () =>{
    return(
        <div className="containerfm">
            <div className="containerfm1">
            <h1>Get Started</h1>
            
            <SignUp />
            <p>
                Already have an account? <span><Link to="/login">Sing in</Link></span>
            </p>
            </div>
        </div>
    )
}
export default RegisterPage