//=================================================//

        
        {/* <div>
        <label>
          Country:
          <Select
            options={countries}
            onChange={handleCountryChange}
            value={countries.find((country) => country.label === formData.country)}
          />
        </label>
        </div> */}



//---------------------------------------------------------//

// // import axios from "axios"
// // import { useState } from "react"


// for city...
// import Country from "./Country";

// import Select from 'react-select'
// import countryList from 'react-select-country-list'

// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
//   LanguageSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

// const Home = () => {

//   const [id, setid] = useState();
//   const [name, setname] = useState();
//   const [number, setnumber] = useState();
//   const [email, setemail] = useState();
//   const [addr, setaddr] = useState();
//   const [gender, setgender] = useState();
//   const [Course, setCourse] = useState();
//   const [state, setstate] = useState();
//   const [city, setcity] = useState();

//   const [school, setschool] = useState();
//   const [dob, setDob] = useState(new Date());

//   const [file, setfile] = useState();

// const [value, setValue] = useState('')
// const options = useMemo(() => countryList().getData(), [])

// const changeHandler = value => {
//     setValue(value)
//   }


// const [countryid, ] = useState(0);
// const [stateid, setstateid] = useState(0);
// const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log("Frontend File : ", file);
//     const formdata = new FormData();
//     formdata.append("file", file)


//     axios.post('http://localhost:3000/home', { id, name, number, email, addr, dob, gender, Course, school, state, city, formdata })
//       .then(res => {
//         console.log(res)
// if(res.data !== "Success..."){
//   navigate("/login")
// }
//         if (res.data.message === "created...") {
//           alert("done...")
//         }
//       })
//   }


// const upload = () => {
//   console.log("Frontend:", file);

//   const formdata = new FormData();
//   formdata.append("file", file);

//   axios.post("http://localhost:3000/home/s", formdata)
//     .then(result => {
//       if (result) {
//         alert("Image Upload...");
//       }
//       console.log(result);
//     }
//     )
//     .catch(err => console.log(err))
// }

//   return (
//     <>

//       <div>
//         <div className="container">
//           <h1 className="text-center">Student Information</h1>

//           {/* <div className="photo ">
//             <div className="student_img">
//               <h5>Select You Image</h5>
//               <div className="student_img_div">
//                 <input type="file" onChange={e => setfile(e.target.files[0])}
//                   required />
//                 <button onClick={upload}>Submit</button>
//               </div>
//             </div>
//           </div> */}

//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             {/*
//           <div>
//           <Select name="value" options={options} value={value} onChange={changeHandler} />
//           </div> */}



//             <div className="student-form">

//               <input type="file"
//                 onChange={(e) => setfile(e.target.files[0])}
//               />

//               <div>

// <label htmlFor="id">Enter Entrollment Id:</label>
// <input type="text" id="id" name="id" placeholder="Enter Your Entrollment Id"
//   onChange={(e) => setid(e.target.value)}
// />

//                 <label htmlFor="name">Enter Your Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter Your Name"
//                   onChange={(e) => setname(e.target.value)}
//                 />

// <label htmlFor="number">Mobile:</label>
// <input type="number" id="number" name="number" placeholder="Enter Your Mobile"
//   onChange={(e) => setnumber(e.target.value)}
// />

// <label htmlFor="email" style={{ margin: "5px 0px" }}>Email:</label>
// <input type="email" id="email" name="email" placeholder="Enter Your Email"
//   onChange={(e) => setemail(e.target.value)}
// />


// <label htmlFor="addr" style={{ margin: "10px 0px" }}>Enter Your Address:</label>
// <textarea type="text" id="addr" name="addr" placeholder="Enter Your Address"
//   onChange={(e) => setaddr(e.target.value)}
// />


//                 <label htmlFor="state">State:</label>
//                 <input type="text" id="state" name="state" placeholder="Enter Your State"
//                   onChange={(e) => setstate(e.target.value)}
//                 />

//                 <label htmlFor="city" style={{ margin: "5px 0px" }}>City:</label>
//                 <input type="text" id="city" name="city" placeholder="Enter Your City"
//                   onChange={(e) => setcity(e.target.value)}
//                 />

// <div id="gender" style={{ margin: "8px 0px" }}>
//   <label>Gender:</label>

//   <div className="radio-pad">
//     <input type="radio" value="Male" name="gender" id="gender1"
//       onChange={(e) => setgender(e.target.value)}
//     />
//     <label htmlFor="gender1">Male</label>
//   </div>

//   <div className="radio-pad">
//     <input type="radio" value="Female" name="gender" id="gender2"
//       onChange={(e) => setgender(e.target.value)}
//     />
//     <label htmlFor="gender2">Female</label>
//   </div>

// </div>

// <div className="dob">
//   <label htmlFor="dob" style={{ margin: "7px 0px" }}>Date of Birth:</label>
//   <DatePicker name="dob" id="dob"
//     selected={dob} onChange={(date) => setDob(date)}
//     dateFormat="dd/MM/yyyy"
//     maxDate={new Date()}
//   />
// </div>


//                 <label htmlFor="school">School:</label>
//                 <input type="text" id="school" name="school" placeholder="Enter Yor School"
//                   onChange={(e) => setschool(e.target.value)}
//                 />


// <label htmlFor="Course">Course:</label>
// <select id="Course" name="Course" onChange={(e) => setCourse(e.target.value)} >
//   <option value="BCA">BCA</option>
//   <option value="BBA">BBA</option>
//   <option value="MCA">MCA</option>
//   <option value="MBA">MBA</option>
// </select>

//                 <label htmlFor="read">
//                   <input type="checkbox" name="read" value="reading" id="read"
//                     required />
//                   I Agree <span>Tems & Condition</span>
//                 </label>

//               </div>

//               <button id="registerButton">Add Student</button>
//             </div>

//           </form>


//         </div>
//       </div>

//     </>

//   )
// }

// export default Home