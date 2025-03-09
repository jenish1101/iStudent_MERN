import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dates = ({ selected, onChange }) => {
    return (
        <>
            <div className="d-flex dob my-3">
                <label htmlFor="date">Date of Birth:</label>
                <DatePicker
                    id="date"
                    name="dateOfBirth"
                    selected={selected}
                    maxDate={new Date()}
                    onChange={onChange}
                    dateFormat={"dd-MM-yyyy"}
                />
            </div>
        </>
    )
}

//for above error
Dates.propTypes = {
    selected: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Dates