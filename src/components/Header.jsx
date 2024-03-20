
import React from 'react';
import headerImage from '../assets/Vote-Transparent-Background.jpg'; // Import your image file
import './cssComponents/Header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();
  const vote = ()=>{
      navigate('/voter');
  }

  const candidates = ()=>{
      navigate('/candidate');
  }
  return (
    <header style={{ position: 'relative' }}>
      <div className='maindiv'>
      <p className='ht'>Welcome to Online Voting</p>
      <p className='ht1'>Here the portal ensure the privacy of the <br/> voter and it store in blockchain.</p>
      <div className='bdiv'>
        <button className='voter' type = "button" onClick={vote}>Voters</button>
        <button className='cb'type = "button" onClick={candidates} >Candidates</button>
      </div>
      </div>
      <img src={headerImage} alt="Header Image" />
    </header>
  );
}

export default Header;
