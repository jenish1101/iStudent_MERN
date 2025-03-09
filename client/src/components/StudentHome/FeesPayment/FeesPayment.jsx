import { useState, useEffect } from "react";
import "./FeesPayment.css"; // Import the CSS file
import axios from "axios";

const FeesPayment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: ""
    });

    const [transactionId, setTransactionId] = useState(null);
    const [isPaid, setIsPaid] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    // Generate Random Transaction ID
    const generateTransactionId = () => {
        return "TXN" + Math.floor(1000000000 + Math.random() * 9000000000);
    };

    // Handle Payment Button Click
    const handlePayment = async () => {
        setTransactionId(generateTransactionId());
        setIsPaid(true);
    };

    // Fetch User Data from Backend API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/student-home/payment");
                console.log("RES: ", res.data.UserData);

                if (res.data.UserData.length > 0) {
                    setFormData({
                        name: res.data.UserData[0].name || "",
                        email: res.data.UserData[0].email || "",
                        amount: "17k"
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="fees-payment-container">
            <h2 className="title">🎓 Student Fees Payment</h2>

            {/* If payment is not done */}
            {!isPaid ? (
                <>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            readOnly
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                        />
                    </div>

                    <div className="input-group">
                        <label>Amount</label>
                        <input
                            type="text"
                            name="amount"
                            value={"₹17,000"}
                            readOnly
                        />
                    </div>

                    <button className="pay-btn" onClick={handlePayment}>💸 Pay Now</button>
                </>
            ) : (
                <div className="payment-success">
                    <h3>✅ Payment Successful</h3>
                    <p><strong>Transaction ID:</strong> {transactionId}</p>
                    <p><strong>Amount Paid:</strong> ₹17,000</p>
                    <p><strong>Thank You, {formData.name} 🎉</strong></p>
                </div>
            )}
        </div>
    );
};

export default FeesPayment;
