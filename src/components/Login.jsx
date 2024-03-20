import React, { useState } from 'react';
import './cssComponents/Login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [voterID, setVoterID] = useState('');


    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/phonenumberinput');
    }


  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form>
        <div className="input-container">
          <label className='label1' htmlFor="voterID">Voter ID:</label>
          <input className='input2'
            type="text"
            id="voterID"
            value={voterID}
            onChange={(e) => setVoterID(e.target.value)}
          />
        </div>
        <button className="login-button" type="button" onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

export default Login;
