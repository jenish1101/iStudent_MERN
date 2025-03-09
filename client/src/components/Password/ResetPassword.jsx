import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {

    // axios.defaults.withCredentials = true;
    const [password, setpassword] = useState();
    const { token } = useParams();
    // console.log(token);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/reset-password/" + token, { password })  //send data to index.js
            .then(response => {
                // console.log(response);
                if (response.data.status) {
                    alert("Password Is Reset...");
                    navigate("/login");
                }
                console.log(response.data);

                if (response.data.message == "Password Length Should Be More Than 5...") {
                    alert("Password Length Should Be More Than 5...")
                }
            })
            .catch(err => console.log(err, "Not connected For Reset Password..."))
    }

    return (
        <div>

            <div className="container">
                <h2>Reset Password</h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter New Password"
                            onChange={(e) => setpassword(e.target.value)}
                            required />
                    </div>


                    <input type="submit" value="Reset Password" />
                </form>

            </div>

        </div>
    )
}

export default ResetPassword
