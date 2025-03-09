import PropTypes from 'prop-types';

const Checklist = ({ hobbies, onChange, error }) => {
  return (
    <div className='d-flex my-3'>
      <label>Hobbies:</label>
      <div className='mx-2'>

        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Dance"
            checked={hobbies.includes('Dance')}
            onChange={onChange}
          />
          Dance
        </label>

        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Singing"
            checked={hobbies.includes('Singing')}
            onChange={onChange}
          />
          Singing
        </label>

        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Reading"
            checked={hobbies.includes('Reading')}
            onChange={onChange}
          />
          Reading
        </label>

        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Writing"
            checked={hobbies.includes('Writing')}
            onChange={onChange}
          />
          Writing
        </label>

        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Running"
            checked={hobbies.includes('Running')}
            onChange={onChange}
          />
          Running
        </label>


      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};


//for above error
Checklist.propTypes = {
  hobbies: PropTypes.array.isRequired, // Ensure hobbies prop is an array
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string 
};

export default Checklist;





// import PropTypes from 'prop-types';
// import { useState } from 'react';

// const Checklist = ({ onChange, error }) => {
//   const [selectedHobbies, setSelectedHobbies] = useState([]);

//   // Define a list of hobbies
//   const hobbiesList = [
//     { value: 'Dance', label: 'Dance' },
//     { value: 'Singing', label: 'Singing' },
//     { value: 'Reading', label: 'Reading' },
//     { value: 'Writing', label: 'Writing' },
//     { value: 'Running', label: 'Running' },
//   ];

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedHobbies([...selectedHobbies, value]);
//     } else {
//       setSelectedHobbies(selectedHobbies.filter((hobby) => hobby !== value));
//     }
//     onChange(e); // Pass the event to the parent component
//   };

//   return (
//     <div className='d-flex my-3'>
//       <label>Hobbies:</label>

//       <div className='mx-2'>
//         {hobbiesList.map((hobby) => (
//           <label key={hobby.value}>
//             <input
//               type="checkbox"
//               name="hobbies"
//               value={hobby.value}
//               checked={selectedHobbies.includes(hobby.value)}
//               onChange={handleCheckboxChange}
//             />
//             {hobby.label}
//           </label>
//         ))}
//       </div>

//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// Checklist.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   error: PropTypes.string, // Assuming error is a string
// };

// export default Checklist;