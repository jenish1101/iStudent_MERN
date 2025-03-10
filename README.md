# iStudent_MERN

✅ iStudent App - My First MERN Stack Project 🚀
📌 Project Name: iStudent App
💻 Technology Stack: MERN (MongoDB, Express.js, React.js, Node.js)
🚀 Project Overview
The iStudent App was my first full-stack MERN (MongoDB, Express.js, React.js, Node.js) Application that I built to learn full-stack development from scratch.

In this app, I focused on:
✅ User Authentication (Login/Signup) using JWT Token.
✅ Student Form Submission.
✅ Download Form as PDF.
✅ View Profile and ID Card.
✅ Basic Payment Simulation (Frontend only).
✅ Logout Functionality.
✅ Forgot/Reset Password using NodeMailer.

📊 Key Features of iStudent App
Here are the main features that I built in my iStudent App:

💎 1. User Authentication (Login/Signup)
✅ Signup: New students can sign up by providing:
Name, Email, Password, Confirm Password.
✅ Login: After signup, students can login using their Email & Password.
✅ JWT Authentication:
I used JWT (JSON Web Token) to authenticate users after login.
Once the user logs in, the token is saved in Session Storage to maintain login sessions.
✅ Password Hashing:
I used bcrypt.js to hash the password before storing it in the database.
✅ Protected Routes:
If a user is not logged in, they cannot access the Profile Page, Payment Page, Form Page, etc.
✅ Logout:
Clicking Logout will clear the token from Session Storage and redirect the user to the Login Page.

📄 2. Student Form (Fill and Download as PDF)
✅ After successful login, students are redirected to a Form Page where they fill:
Name, Email, Contact, Gender, Course, DOB, Address, etc.
✅ Form Download (PDF):
After submitting the form, students can download their form as a PDF file.
✅ Data Storage:
The form data is stored in MongoDB Atlas.
✅ File Upload (Multer):
I used Multer middleware to allow students to upload their profile picture.
The uploaded images are stored in the public/Images folder on the server.

🪪 3. Student ID Card (View and Download)
✅ After submitting the form, students can see their ID Card that contains:
✅ Student Name, Email, Course, ID Number, Profile Picture, etc.
✅ Download ID Card (PDF):
The student can download the ID Card as a PDF file.
✅ Dynamic ID Number:
Each student is automatically assigned a unique ID Number.

💳 4. Basic Payment Simulation (Frontend Only)
✅ I added a basic frontend payment simulation without using any real payment gateway.
✅ On the Payment Page, students enter:
✅ Name, Email, Amount.
✅ On clicking Pay Now, a Transaction ID is generated like:
🆔 TXN8837299938.
✅ It shows Payment Successful after confirming the Transaction ID.
❌ No Real Payment Gateway:
I did not integrate any real payment gateway like Razorpay/Stripe.

👤 5. View Profile (User Dashboard)
✅ After login, the user can view their Profile, which contains:
✅ Name, Email, Mobile Number, Address, Course, Date of Birth, etc.
✅ Profile Picture uploaded during form submission.
✅ ID Card Preview.
✅ This page is protected by JWT Token, so only logged-in users can access it.

🔥 6. Logout Functionality
✅ I created a Logout Button that:
✅ Clears the JWT Token from Session Storage.
✅ Redirects the user to the Login Page.
✅ This ensures protected routes and prevents unauthorized access.

💌 7. Forgot/Reset Password Using NodeMailer
✅ If a student forgets their password, they can:
✅ Click on Forgot Password.
✅ Enter their Email.
✅ Receive a Reset Password Link via Email.

✅ NodeMailer Integration:
I used NodeMailer to send a Reset Password Link to the user’s email.
✅ Reset Page:
Clicking the link redirects the user to a Reset Password Page.
✅ They can set a new password, which is hashed and saved in the database.
✅ Token Expiry:
The reset token is valid for 15 minutes only.

📜 8. Session Storage for Token
✅ I used Session Storage to store JWT Tokens after login.
✅ This keeps the user logged in until they logout or close the browser.
✅ On Logout, the session is destroyed automatically.


=========================================================================

✅ What I Learned From This Project
Building the iStudent App taught me many practical things, including:

✅ Full Stack Development (MERN).
✅ JWT Authentication & Authorization.
✅ User Registration, Login, Logout Flow.
✅ Form Submission & Data Storage (MongoDB).
✅ Password Hashing (bcrypt.js).
✅ Session Storage for Tokens.
✅ File Uploading Using Multer.
✅ Email Sending Using NodeMailer.
✅ Downloading PDF (Form + ID Card).
✅ Protected Routes Using JWT.


💯 Why I’m Proud of This Project
✅ This was my first complete MERN Stack Project.
✅ I built everything from scratch — Frontend, Backend, Database, Authentication, Form Handling, Payment Simulation, and File Uploads.
✅ This project made me confident in Full Stack Development (MERN).
✅ This project boosted my confidence in building Full Stack Applications! 🚀💻🔥