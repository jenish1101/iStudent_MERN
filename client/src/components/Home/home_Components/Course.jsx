import PropTypes from 'prop-types';

const Course = ({ value, onChange, error }) => {
  return (
    <>
    <div>
          <label htmlFor="course">Course:</label>
          <select id="course" name="course" value={value}
            onChange={onChange}
          >
            <option value="">Select a course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>

        </div>
        {error && <p className="error-message">{error}</p>}
    </>
  )
}

//for above error
Course.propTypes = {
  value: PropTypes.string.isRequired, // Ensure value prop is a string and required
  onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
  error: PropTypes.string 
};

export default Course