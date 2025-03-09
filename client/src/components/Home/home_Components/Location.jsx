import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import PropTypes from 'prop-types';

const Location = ({ formData, handleCountryChange, handleStateChange, handleCityChange,
  getError, stateError, cityError
}
) => {

  return (
    <div className='country-state-city'>

      <div className="country">

        <label> Country:

          <Select
            placeholder="Select Country"
            options={Country.getAllCountries().map((country) => ({
              label: country.name,
              value: country.isoCode,
            }))}
            onChange={handleCountryChange}

            // value={
            //   formData.country
            //     ? {
            //         label: formData.country,
            //         value: Country.getAllCountries().find((country) => country.name === formData.country).isoCode,
            //       }
            //     : null
            // }

            value={formData.country ? { label: formData.country, value: formData.country } : null}
          />

        </label>
        {getError("country") && <p style={{ color: "red", fontSize: "13px" }}>{getError("country")}</p>}

      </div>


      <div className="state my-3">

        <label> State:

          <Select
            placeholder="Select State"
            options={
              formData.country
                ? State.getStatesOfCountry(
                  Country.getAllCountries().find((country) => country.name === formData.country).isoCode
                ).map((state) => ({
                  label: state.name,
                  value: state.isoCode,
                }))
                : []
            }
            onChange={handleStateChange}

            // value={
            //   formData.state
            //     ? {
            //         label: formData.state,
            //         value: State.getAllStates().find((state) => state.name === formData.state).isoCode,
            //       }
            //     : null
            // }

            value={formData.state ? { label: formData.state, value: formData.state } : null}
          />
        </label>
        {getError("state") && <p style={{ color: "red", fontSize: "13px" }}>{getError("state")}</p>}

      </div>


      <div className="city">

        <label> City:

          <Select
            placeholder="Select City"
            options={
              formData.state
                ? City.getCitiesOfState(
                  Country.getAllCountries().find((country) => country.name === formData.country).isoCode,
                  State.getStatesOfCountry(
                    Country.getAllCountries().find((country) => country.name === formData.country).isoCode
                  ).find((state) => state.name === formData.state).isoCode
                ).map((city) => ({
                  label: city.name,
                  value: city.name,
                }))
                : []
            }
            onChange={handleCityChange}
            value={formData.city ? { label: formData.city, value: formData.city } : null}
          />
        </label>
        {getError("city") && <p style={{ color: "red", fontSize: "13px" }}>{getError("city")}</p>}

      </div>


    </div>
  );
};


// for propTypes 
Location.propTypes = {
  formData: PropTypes.shape({
    country: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,

  countryError: PropTypes.string, // Error message for country selection
  stateError: PropTypes.string, // Error message for state selection
  cityError: PropTypes.string, // Error message for city selection
};

export default Location;
