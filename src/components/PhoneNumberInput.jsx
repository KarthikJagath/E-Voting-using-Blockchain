import React, { useState } from 'react';
import './cssComponents/PhoneNumberInput.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const PhoneNumberInput = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();


  const handleNext = () => {
        navigate('/otpinput');
    
  };

  return (
    <div className="phone-number-container">
      <h2 className="phone-number-header">Enter Your Phone Number</h2>
      <form>
        <div className="input-container">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
          className='input5'
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <button className="next-button" type="button" onClick={handleNext}>Get OTP</button>
      </form>
    </div>
  );
};

export default PhoneNumberInput;
