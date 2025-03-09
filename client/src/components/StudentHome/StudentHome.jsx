import { Link, useNavigate } from 'react-router-dom';
import "./StudentHome.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./StudentHome.css"

const StudentHome = () => {

    const navigate = useNavigate();

    const token = sessionStorage.getItem("accessToken");
    useEffect(() => {
        if (!token) {
            navigate("/login");  // ✅ Redirect to Login Page
            setTimeout(() => {
                alert("Please Login");
            }, 1000);
        }
    }, [token]);

    const [studentData, setStudentData] = useState([]); // Set state as an array

    const fetchStudentData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/student-home");
            console.log("Student Data:", response.data);

            if (response.data && response.data.UserData) {
                setStudentData(response.data.UserData);
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    useEffect(() => {
        fetchStudentData();
    }, []);

    return (
        <div className="student-home-container">
            <div className="student-profile">
                {studentData.length > 0 ? (
                    studentData.map((student, index) => (
                        <div key={index} className="student-card" style={{display:"flex", flexDirection:"column", margin:"10px 0px"}}>
                            <img
                                src={`http://localhost:3000/Images/${student.image}`}
                                alt="Student"
                                className="student-img"
                                onError={(e) => e.target.src = "/student.jpg"}
                            />
{/* 
                           <div className='Student-info'>
                           <h2 className="student-name">{student.name}</h2>
                           <p className="student-course">{student.course || "B.Tech Computer Science"}</p>
                           </div>
 */}


                            {/* ✅ View Profile Button (Pass Student ID) */}
                            <Link to={`/dashboard/${student._id}`} className="option-card">
                                View Profile
                            </Link>

                            
                        </div>
                    ))
                ) : (
                    <p>Loading student data...</p>
                )}
            </div>

            <div className="student-options">
                {/* <Link to="/dashboard" className="option-card">Student Dashboard</Link> */}
                
                <Link to="/fees-payment" className="option-card">Quick Fees Payment</Link>
                
                <Link to="/digital-id" className="option-card" >Digital ID Card
                </Link>
            </div>
        </div>
    );
};

export default StudentHome;
