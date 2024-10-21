import React from "react";
import { useState } from "react";
import states from "../constants/states";

const PropertyInput = () => {
  const [zillowLink, setZillowLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and potentially Zillow scraping logic here
    console.log("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Property Address */}
      <div className="mb-3">
        <label htmlFor="propertyAddressInput" className="form-label">
          Property Address
        </label>
        <input
          type="text"
          className="form-control"
          id="propertyAddressInput"
          required
        />
      </div>

      {/* City */}
      <div className="mb-3">
        <label htmlFor="cityInput" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="cityInput" required />
      </div>

      {/* State Dropdown */}
      <div className="mb-3">
        <label htmlFor="stateInput" className="form-label">
          State
        </label>
        <select className="form-control" id="stateInput" required>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* Zip Code */}
      <div className="mb-3">
        <label htmlFor="zipCodeInput" className="form-label">
          Zip Code
        </label>
        <input
          type="number"
          className="form-control"
          id="zipCodeInput"
          required
        />
      </div>

      {/* Bedrooms */}
      <div className="mb-3">
        <label htmlFor="bedroomsInput" className="form-label">
          Bedrooms
        </label>
        <input
          type="number"
          className="form-control"
          id="bedroomsInput"
          min="0"
          required
        />
      </div>

      {/* Bathrooms */}
      <div className="mb-3">
        <label htmlFor="bathroomsInput" className="form-label">
          Bathrooms
        </label>
        <input
          type="number"
          className="form-control"
          id="bathroomsInput"
          min="0"
          required
        />
      </div>

      {/* SqFt */}
      <div className="mb-3">
        <label htmlFor="sqftInput" className="form-label">
          Square Footage
        </label>
        <input
          type="number"
          className="form-control"
          id="sqftInput"
          min="0"
          required
        />
      </div>

      {/* Rent Amount */}
      <div className="mb-3">
        <label htmlFor="rentAmountInput" className="form-label">
          Rent Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="rentAmountInput"
          min="0"
          required
        />
      </div>

      {/* Occupied */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="occupiedCheck"
        />
        <label className="form-check-label" htmlFor="occupiedCheck">
          Occupied?
        </label>
      </div>

      {/* Photo Upload */}
      <div className="mb-3">
        <label htmlFor="photoUpload" className="form-label">
          Upload Property Photos
        </label>
        <input type="file" className="form-control" id="photoUpload" multiple />
      </div>

      {/* Zillow Link */}
      <div className="mb-3">
        <label htmlFor="zillowLinkInput" className="form-label">
          Zillow Link (optional)
        </label>
        <input
          type="url"
          className="form-control"
          id="zillowLinkInput"
          placeholder="Paste Zillow link"
          value={zillowLink}
          onChange={(e) => setZillowLink(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PropertyInput;
