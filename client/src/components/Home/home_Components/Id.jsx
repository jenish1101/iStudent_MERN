import PropTypes from 'prop-types';

const Id = ({ value, onChange, error }) => {
    return (
        <>
            <div className="my-3">
                <label htmlFor="id">Id:</label>
                <input 
                    type="text" 
                    id="id" 
                    name="id" 
                    placeholder="Enter Your Entrollment Id (Ex: E123)" 
                    value={value}
                    onChange={onChange}
                />
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    )
}

//for above error
Id.propTypes = {
    value: PropTypes.string.isRequired, // Ensure value prop is a string and required
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string 
  };

export default Id