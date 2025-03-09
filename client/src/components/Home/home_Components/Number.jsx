import PropTypes from 'prop-types';

const Number = ({ value, onChange, error }) => {
    return (
        <>
            <div className="my-3">
                <label htmlFor="number">Mobile:</label>
                <input
                    type="number"
                    id="number"
                    name="number"
                    placeholder="Enter Your Mobile"
                    value={value}
                    onChange={onChange}
                />
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    )
}

//for above error
Number.propTypes = {
    value: PropTypes.isRequired, // Ensure value prop is a string and required
    onChange: PropTypes.isRequired, // Ensure onChange prop is a function and required
};

Number.propTypes = {
    value: PropTypes.string.isRequired, // Ensure value prop is a string and required
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string
  };


export default Number