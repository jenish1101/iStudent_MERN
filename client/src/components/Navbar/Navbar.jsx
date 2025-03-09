import "./Navbar.css"

import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//For Toggle Navbar
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const navigate = useNavigate();

  //For Toggle Navbar
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout');
      //
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      setIsLoggedIn(false);
      //
      navigate('/login');
    } catch (err) {
      console.error("Error during logout", err);
    }
  };


  return (
    <div className="navbar">
      <h3>iStudent</h3>
      <ul>
        <li>
          {!isLoggedIn ? (
            <>
              <Link className="nav-btn" to="/">Signup</Link>
              <Link className="nav-btn" to="/login">Login</Link>
            </>
          ) : (
            <>
              <Link className="nav-btn" to="/home">Home</Link>
              <Link className="nav-btn" to="/student-home">Student</Link>
              <button className="nav-btn" onClick={handleLogout}>Logout</button>
            </>
          )}
        </li>
      </ul>
    </div>
  );

  // return (
  //   <>
  //     <div className="navbar">
  //       <h3>JENISH</h3>
  //       <ul>
  //         <li>
  //           <Link className="nav-btn" to="/">Signup</Link>
  //           <Link className="nav-btn" to="/login">Login</Link>
  //           <Link className="nav-btn" to="/home">Home</Link>
  //           {/* <Link className="nav-btn" to="/logout">Logout</Link> */}
  //           <Link className="nav-btn" to="/logout" onClick={handleLogout}>Logout</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </>
  // )
}

export default Navbar






