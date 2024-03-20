import React, { useState, useRef } from 'react';
import './cssComponents/OTPInput.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
const OTPInput = ({ onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Focus next input if there's value entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
  };
  const navigate = useNavigate();
  const handleVerify = () => {
    navigate('/votingpage');

  };

  return (
    <div className="otp-container">
      <h2 className="otp-header">Enter OTP</h2>
      <div className="otp-inputs-container">
        {otp.map((digit, index) => (
          <input className='input1'
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <button className="verify-button" type="button" onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OTPInput;
