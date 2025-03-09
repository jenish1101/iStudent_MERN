import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Home.css"


//PDF Utils
import { handleDownload } from '../../utils/PdfUtils';

//Componenets
import Image from './home_Components/Image';
import Id from './home_Components/Id';
import Name from './home_Components/Name';
import Number from './home_Components/Number';
import Email from './home_Components/Email';
import Course from './home_Components/Course';
import Dates from './home_Components/Dates';
import Gender from './home_Components/Gender';
import Checklist from './home_Components/Checklist';
import Location from './home_Components/Location';


const Home = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: null,
    id: "",
    name: "",
    number: "",
    email: "",
    address: "",
    gender: "",
    dateOfBirth: new Date(),
    course: "",
    country: "",
    state: "",
    city: "",
    hobbies: [],
  });


  //For Validation
  const [backendError, setBackendError] = useState([]);

  //For Desable or Enable PDF Download Button
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);




  //for handle country,state and city
  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.label, state: '', city: '' });
  };

  const handleStateChange = (selectedOption) => {
    setFormData({ ...formData, state: selectedOption.label, city: '' });
  };

  const handleCityChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption.label });
  };
  //

  //for Image 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  //for Date 
  const handleDateChange = (dateOfBirth) => {
    setFormData({ ...formData, dateOfBirth });
  };



  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    //for checkbox
    if (type === 'checkbox') {

      //if chechbox is checked
      if (checked) {
        setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
      }
      //if chechbox is not checked
      else {
        setFormData({ ...formData, hobbies: formData.hobbies.filter((hobby) => hobby !== value) });
      }
    }
    //for other values like id,name etc...
    else {
      setFormData({ ...formData, [name]: value });
    }
  };



  //for Submit Form
  const handleSubmit = async (e) => {

    e.preventDefault();

    const formDataToSend = new FormData();

    for (let key in formData) {
      if (key === 'hobbies') {
        formData[key].forEach((hobby) => {
          formDataToSend.append('hobbies', hobby);
        });
      }
      else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:3000/home', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      
      //for form validation(Express Validator)
      if (response.data.errors) {
        console.log("error:" , response.data.errors);
        setBackendError(response.data.errors);
      }

      if (!response.data.errors) {
        setBackendError([]);
      }
      //

      if(response.data.message){
        alert(response.data.message);
      }

      if (response.data.message === "created...") {
        alert("Form Submitted Successfully...");
        setIsFormSubmitted(true);
      }


    }
    catch (error) {
      console.error('Error submitting user data:', error);
      alert('An error occurred while submitting user data.');
    }
  };

  //it's neccessary for authentication using jwt token


  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');

    if (!token) {
      navigate("/login");
    }
    else {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

      axios.get("http://localhost:3000/home")
        .then(result => {
          if (result.data !== "Success...") {
            navigate("/login");
          }
        })
        .catch(err => {
          console.log(err);
          navigate("/login");
        });
    }
  }, [navigate]);


  const getError = (field) => {
    const error = backendError.find(err => err.path === field);
    // console.log("getError", error);
    return error ?  <p style={{ color: "red", fontSize: "20px"}}>{error.msg}</p>  : null;
  };



  return (
    <div className='container Home-Container'>

      <h1 className="text-center my-5">
        <span>
          <img src="../../../public/student.jpg" alt="IMG" height={70} width={70} />
        </span>
        REGISTER
      </h1>

{/* for show all errors */}
      {/* 
          {
      backendError.map((er, index) => (
        <p key={index} style={{ color: "red" }}>{er.msg}</p>
      ))
      } 
 */}


      <form onSubmit={handleSubmit}>

        {/* for Image */}
        <Image onChange={handleImageChange}
        />{getError("image")}

        <Id 
          value={formData.id} 
          onChange={handleChange} 
        />{getError("id")}
  


        {/* for Name */}
        <Name value={formData.name} onChange={handleChange}
        />{getError("name")}

        {/* for Mobile */}
        <Number value={formData.number} onChange={handleChange}
        />{getError("number")}


        {/* for email */}
        <Email value={formData.email} onChange={handleChange}
        />{getError("email")}


        {/* for country,state and city */}
        <Location
          formData={formData}
          handleCountryChange={handleCountryChange}
          handleStateChange={handleStateChange}
          handleCityChange={handleCityChange}
          getError={getError}
        />


        {/* for Select Gender */}
        <Gender onChange={handleChange}/> 
        {getError("gender")}


        {/* for Checklist */}
        <Checklist hobbies={formData.hobbies} onChange={handleChange}
        />{getError("hobbies")}


        {/* for Select Date */}
        <Dates selected={formData.dateOfBirth} onChange={handleDateChange}
         />{getError("dateOfBirth")}


        {/* for Select Course Using DropDown Menu */}
        <Course value={formData.course} onChange={handleChange}
          />
          {getError("gender")} 

        <div className='d-flex justify-content-end my-5'>
          <button className="btn btn-outline-success mx-2" type="submit">Submit</button>

          {/* For Pdf Data  */}
          <button
            className="btn btn-outline-primary" type="button"
            onClick={() => handleDownload(formData)}
            disabled={!isFormSubmitted}
          > Download PDF
          </button>

        </div>

      </form>


    </div>
  );

};

export default Home;






  // const refreshAccessToken = async () => {
  //   try {
  //     const refreshToken = sessionStorage.getItem('refreshToken');
  //     const response = await axios.post("http://localhost:3000/token", { refreshToken });
  //     const { accessToken } = response.data;
      
  //     // Update the access token in session storage
  //     sessionStorage.setItem('accessToken', accessToken);
      
  //     // Return the new access token
  //     return accessToken;
  //   } catch (error) {
  //     throw new Error("Error refreshing access token");
  //   }
  // };

  
  // useEffect(() => {
  //   const token = sessionStorage.getItem('accessToken');

  //   if (!token) {
  //     navigate("/login");
  //   } else {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  //     axios.get("http://localhost:3000/home")
  //       .then(result => {
  //         if (result.data !== "Success...") {
  //           // Token expired or invalid, try refreshing token
  //           refreshAccessToken()
  //             .then(newToken => {
  //               // If token refresh successful, update headers and retry request
  //               axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  //               return axios.get("http://localhost:3000/home");
  //             })
  //             .then(result => {
  //               if (result.data !== "Success...") {
  //                 navigate("/login");
  //               }
  //             })
  //             .catch(error => {
  //               console.error("Error refreshing access token:", error);
  //               navigate("/login");
  //             });
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         navigate("/login");
  //       });
  //   }
  // }, [navigate]);

  //

  // Extract errors for each field(Express Validation)
