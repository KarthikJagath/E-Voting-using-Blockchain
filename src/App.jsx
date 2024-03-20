import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Voter from './pages/Voter';
import PhoneNumber from './pages/PhoneNumber';
import OTPInput from './pages/OTPInput';
import VotingPage from './pages/VotingPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/voter" element={<Voter/>}/>
          <Route path='/phonenumberinput' element={<PhoneNumber/>}/>
          <Route path="/otpinput" element={<OTPInput />}/>
          <Route path="/votingpage" element={<VotingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
