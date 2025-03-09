import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {

    // axios.defaults.withCredentials = true;
    const [email, setemail] = useState();
    const navigate = useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/forgot-password' , {email})  //send data to index.js
        .then(res => {
            console.log(res);
            if(res.data.status){
                alert("check Your email for reset Password...");
                    navigate("/login")
            }
            // console.log(res.data);

            if(res.data.message === "User not Registered..."){
                alert("User not Registered...");
            }
        })
        .catch(err => console.log(err,"Not connected from signup..."))
    }

    return (
        <div>
            <div className="container">
                <h2>Forgot Password</h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" autoComplete="off" name="email" placeholder="Enter Email"
                        onChange={(e) => setemail(e.target.value)}
                        required/>
                    </div>
                    
                    <input type="submit" value="Send" />
                </form>

            </div>

        </div>
    )
}

export default ForgotPassword
