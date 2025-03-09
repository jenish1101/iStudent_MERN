import { useEffect, useState } from "react";
import axios from "axios";
import "./DigitalID.css";

const DigitalID = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStudentData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/student-home");
            console.log("Student Data:", response.data);

            if (response.data && response.data.UserData && response.data.UserData.length > 0) {
                setStudent(response.data.UserData[0]); // Assuming first student's data
            } else {
                setError("No student data found.");
            }
        } catch (err) {
            setError("Error fetching student data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudentData();
    }, []);

    if (loading) return <p className="loading-message">Loading student data...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="digital-id-container">
            <div className="id-card">
                <img
                    src={`http://localhost:3000/Images/${student.image}`}
                    alt="Student"
                    className="id-photo"
                    onError={(e) => (e.target.src = "/student.jpg")}
                />
                {/* <h2 className="id-name">{student.name}</h2> */}
                {/* <p className="id-detail"><strong>Roll No:</strong> {student.rollNo}</p> */}
                <p className="id-detail"><strong>Student ID:</strong> {student.id}</p>
                <p className="id-detail"><strong>Student Name:</strong> {student.name}</p>
                <p className="id-detail"><strong>Course:</strong> {student.course || "B.Tech Computer Science"}</p>
                {/* <p className="id-detail"><strong>Address:</strong> {student.address}</p> */}
                <p className="id-detail"><strong>Mobile No:</strong> {student.number}</p>
                <p className="id-detail"><strong>Email:</strong> {student.email}</p>
                <p className="id-detail"><strong>Gender:</strong> {student.gender}</p>
                <p className="id-detail"><strong>DOB:</strong> {new Date(student.dateOfBirth).toLocaleDateString('en-GB')}</p>

            </div>
        </div>
    );
};

export default DigitalID;
