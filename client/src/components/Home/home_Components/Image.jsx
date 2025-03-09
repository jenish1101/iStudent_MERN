import PropTypes from 'prop-types';
import { useState } from 'react';

const Image = ({ onChange, error }) => {

    const [imageSelected, setImageSelected] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);

            onChange(e); // Call the onChange function passed from parent component
            setImageSelected(true); // Set imageSelected state to true when an image is selected
        }
    };

    return (
        <>

            <div className="p-result mb-5">
                {imageUrl && (
                    <div className="uploaded-image">
                        <img
                            className='img-fluid rounded'
                            src={imageUrl}
                            alt="Uploaded"
                            height={125}
                            width={125}
                            style={{ border: "2px solid black" }}
                        />
                    </div>
                )}

                {!imageSelected && (
                    <h5>Select Your Image</h5>
                )}

                <input className='mt-3'
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange} // Call handleImageChange instead of onChange directly
                />

                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    )
}


//for above error
Image.propTypes = {
    onChange: PropTypes.func.isRequired, // Ensure onChange prop is a function and required
    error: PropTypes.string
};

export default Image