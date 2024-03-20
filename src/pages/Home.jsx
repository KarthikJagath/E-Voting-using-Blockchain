import React from 'react';
import Header from '../components/Header';
import Getstart from '../components/GetStart';
import Navbar from '../components/Navbar';


import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Navbar />
      <Link
        to="Header"
        smooth={true}
        duration={500}
        className="scrollToHeader"
      >
      </Link>
      <Header />
      <Link
        to="GetStart"
        smooth={true}
        duration={500}
        className="scrollToGetStart"
      >
      </Link>
      <Getstart />
    </div>
  );
}

export default Home;