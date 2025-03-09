import { useState } from "react";
import "./Signup.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    //For Validation
    const [backendError, setBackendError] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/register', { name, email, password })
            .then(response => {
                // console.log(response);

                //for form validation(Express Validator)
                if (response.data.errors) {
                    setBackendError(response.data.errors);
                    // console.log(response.data.errors);
                }
                //

                if (response.data.message === "Account Created...") {
                    alert("Account Created...");
                    navigate("/login");
                }
                
                if (response.data.message === "User Already exists") {
                    alert("User Already exists");
                }
            })

            .catch(err => console.log(err, "Not connected from signup..."))
    }


    // Extract errors for each field(Express Validation)
    const getError = (field) => {
        const error = backendError.find(error => error.path === field);
        return error ? error.msg : null;
    };



    return (
        <>
            <div className="container">
                <h2 className="Reg-title">Registration Form</h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label htmlFor="name">Enter Your Name:</label>

                        <input type="text" id="name" name="name" placeholder="Name"
                            onChange={(e) => setname(e.target.value)}
                        // required
                        />
                        {getError("name") && <p className="signup-error">{getError("name")}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Enter Your Email:</label>

                        <input type="email" id="email" name="email" placeholder="Email"
                            onChange={(e) => setemail(e.target.value)}
                        />


                        {getError("email") && <p className="signup-error">{getError("email")}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Enter Your Password:</label>

                        <input type="password" id="password" name="password" placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        {getError("password") && <p className="signup-error">{getError("password")}</p>}
                    </div>

                    <input type="submit" value="SignUp" className="button" />

                    <p id="alreay_account">Already Have an Account</p>

                </form>

                <Link to="/login">
                    <input type="submit" value="Login" id="login" className="button" />
                </Link>

            </div>
        </>
    )
}

export default Signup









