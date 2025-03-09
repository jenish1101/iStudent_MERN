import PropTypes from 'prop-types';

const Gender = ({ onChange, error }) => {
    return (
        <>

            <div className="d-flex my-3">

                <label style={{ marginRight: "10px" }}>Gender:</label>

                <div className="gender-type">

                    <div className='d-flex'>
                        <input
                            id="male" type="radio" name="gender" value="male"
                            // checked={formData.gender === 'male'}
                            onChange={onChange}
                        />
                        <label htmlFor="male" style={{ marginRight: "10px" }}>Male</label>
                    </div>

                    <div className="d-flex">
                        <input
                            id="female" type="radio" name="gender" value="female"
                            // checked={formData.gender === 'female'}
                            onChange={onChange}
                        />
                        <label htmlFor="female" style={{ marginRight: "10px" }}>Female</label>
                    </div>

                    <div className="d-flex">
                        <input
                            id="other" type="radio" name="gender" value="other"
                            // checked={formData.gender === 'other'}
                            onChange={onChange}
                        />
                        <label htmlFor="other">Other</label>
                    </div>

                </div>

            </div>
            {error && <p className="error-message">{error}</p>}
        </>
        
    )
}

//for above error
Gender.propTypes = {
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string 
};

export default Gender