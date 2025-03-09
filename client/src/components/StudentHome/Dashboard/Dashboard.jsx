import "./Dashboard.css";
import { FaUserGraduate, FaBook, FaEnvelope, FaPhoneAlt, FaTransgender, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const { id } = useParams();  // ✅ Get Student ID from URL
  // const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  // ✅ Fetch Student Data by ID
  const fetchStudentDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/student-home/profile/${id}`);
      console.log("Student Info:", response.data.student);
      setStudent(response.data.student);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudentDataById();
  }, [id]);

  if (!student) {
    return <p>Loading student details...</p>;
  }

  return (
    <div className="dashboard-container">
      
      {/* ✅ Student Profile Card */}
      <div className="student-card">
        <div className="student-image">
          <img 
            src={`http://localhost:3000/Images/${student.image}`} 
            alt="Student"
            onError={(e) => e.target.src = "/student.jpg"} // ✅ Fallback Image
          />
        </div>
        <div className="student-info">
          <h2>{student.name}</h2>
          <p><FaUserGraduate /> {student.course}</p>
        </div>
      </div>

      {/* ✅ Student Details Section */}
      <div className="student-details">
        <div className="detail-item">
          <FaBook className="icon" />
          <span><strong>ID:</strong> {student.id}</span>
        </div>

        <div className="detail-item">
          <FaEnvelope className="icon" />
          <span><strong>Email:</strong> {student.email}</span>
        </div>

        <div className="detail-item">
          <FaPhoneAlt className="icon" />
          <span><strong>Phone:</strong> {student.number}</span>
        </div>

        <div className="detail-item">
          <FaTransgender className="icon" />
          <span><strong>Gender:</strong> {student.gender}</span>
        </div>

        <div className="detail-item">
          <FaCalendarAlt className="icon" />
          <span><strong>DOB:</strong> {new Date(student.dateOfBirth).toLocaleDateString()}</span>
        </div>

        <div className="detail-item">
          <FaMapMarkerAlt className="icon" />
          <span><strong>Location:</strong> {student.city}, {student.state}, {student.country}</span>
        </div>

        <div className="detail-item">
          <strong>Hobbies:</strong>
          {student.hobbies.map((hobby, index) => (
            <span key={index} className="hobby-tag">{hobby}</span>
          ))}
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
