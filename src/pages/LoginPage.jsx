import { Link } from "react-router-dom"
import { Login } from "../Components/Login"

const LoginPage = () =>{
    return(
        <div className="containerfm">
            <div className="containerfm1">
            <h1>Login</h1>
            <Login />
        <p>
            Or <span><Link to="/register">register</Link></span>
        </p>
        </div>
        </div>
    )
}
export default LoginPage