import PropTypes from 'prop-types';

const Name = ({ value, onChange, error }) => {
    return (
        <>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={value}
                    onChange={onChange}
                />
            {error && <p className="error-message">{error}</p>}
            </div>
        </>

    );
};

//for above error
Name.propTypes = {
    value: PropTypes.string.isRequired, // Ensure value prop is a string and required
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string 

  };

export default Name