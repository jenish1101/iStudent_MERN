import PropTypes from 'prop-types';

const Email = ({ value, onChange, error }) => {
    return (
        <>
            <div className="my-3">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter Your Email" 
                    value={value}
                    onChange={onChange}
                />
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    )
}

//for above error
Email.propTypes = {
    value: PropTypes.string.isRequired, // Ensure value prop is a string and required
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string 
  };

export default Email