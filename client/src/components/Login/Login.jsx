import "./Login.css";

import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

//For Toggle Navbar
import { AuthContext } from "../../context/AuthContext";


const Login = () => {

    axios.defaults.withCredentials = true;

    // const [name, setname] = useState();
    const [password, setpassword] = useState();
    const [email, setemail] = useState();
    const navigate = useNavigate();

    //For Toggle Navbar
    const { setIsLoggedIn } = useContext(AuthContext);


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:3000/login', { email, password })

            if (res.data.message === "Success") {

                //set Jwt Tokens In Session Storage (Browser)
                sessionStorage.setItem('accessToken', res.data.accessToken);
                sessionStorage.setItem('refreshToken', res.data.refreshToken);

                alert("Login Successfully...");
                //
                setIsLoggedIn(true);
                //
                navigate("/home");
            } 

            else if (res.data.message === "User is not registered..." || res.data.message === "Password is incorrect") {
                // alert("Invalid Name...");
                alert("Something is Wrong...");
            }

            else{
                // alert(res.data.message); 
                alert("Something is wrong...");
            }

        } 
        catch (err) {
            console.error("Error from Login", err);
        }
    };

    return (
        <>

            <div className="container">
                <h2 className="Login-title">Login</h2>
                <form onSubmit={handleSubmit}>

                    {/* <div className="form-group">
                        <label htmlFor="name">Enter Your Name:</label>
                        <input
                            type="text" id="name" name="name" placeholder="Name"
                            onChange={(e) => setname(e.target.value)}
                            required />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="name">Enter Your Email:</label>
                        <input
                            type="text" id="email" name="email" placeholder="Email"
                            onChange={(e) => setemail(e.target.value)}
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Enter Your Password:</label>
                        <input
                            type="password" id="password" name="password" placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                            required />
                    </div>

                    <input type="submit" value="Login" />

                    <Link to="/forgotPassword">Forgot Password?</Link>

                    <p id="alreay_account">New User!</p>

                </form>
                <Link to="/">
                    <input type="submit" value="Signup" id="login" />
                </Link>

            </div>

        </>
    )
}

export default Login