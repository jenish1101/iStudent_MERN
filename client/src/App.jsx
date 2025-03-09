import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

//Components
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Logout from "./components/Logout/Logout";
import ForgotPassword from "./components/Password/ForgotPassword"
import ResetPassword from "./components/Password/ResetPassword"

import StudentHome from "./components/StudentHome/StudentHome";
import Dashboard from "./components/StudentHome/Dashboard/Dashboard";
import FeesPayment from "./components/StudentHome/FeesPayment/FeesPayment";
import DigitalID from "./components/StudentHome/DigitalID/DigitalID";



//For Toggle Navbar
import { AuthProvider } from "./context/AuthContext";

//here If User Is Login Than He Is Not able to go signup/login page until he is is logout
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


const App = () => {


  axios.defaults.withCredentials = true;


  //For Automatically Generate New JWT Access Token And Refresh Token When Old Tokens Are Expired 

  // Add a request interceptor
  axios.interceptors.request.use(async (config) => {

    let accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;

  },
    // return Promise.reject(error);
    (error) => {
      throw error;
      
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use((response) => response, async (error) => {

    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = sessionStorage.getItem('refreshToken');

      const { data } = await axios.post('http://localhost:3000/token', { refreshToken });

      sessionStorage.setItem('accessToken', data.accessToken);
      sessionStorage.setItem('refreshToken', data.refreshToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      return axios(originalRequest);
    }
    // return Promise.reject(error);
    (error) => {
      throw error;
    }
  }
  );

  //



  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>

            {/* here If User Is Login Than He Is Not able to go signup/login page until he is is logout In Protected Route*/}
            <Route path="/" element={<ProtectedRoute element={Signup} />} />
            <Route path="/login" element={<ProtectedRoute element={Login} />} />

            <Route path="/home" element={<Home />}></Route>

            <Route path="/student-home" 
              element={
                 <StudentHome />
              }
            />

            <Route path="/dashboard/:id" element={
            <Dashboard />
            }/>

            <Route path="digital-id" element={
            <DigitalID />
            }/>

            <Route path="/fees-payment" element={
            <FeesPayment />
            }/>
            

            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
            
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App