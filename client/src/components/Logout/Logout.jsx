import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Logout = () => {

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {

    axios.post("http://localhost:3000/logout")

      .then(res => {
        if (res.data.message === "Logout Successfully...") {

          //For Remove Jwt Tokens From session Storage
          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('refreshToken');

          navigate("/login", { replace: true });
        }
      })

      .catch(err => {
        console.log("Logout Error" + err);
      })
  }, [navigate])




  return (
    <div>
      {/* <h2>Logout Page</h2> */}
      {/* <button>Logout</button> */}
    </div>
  )

}

export default Logout