import React from 'react';
import '../Css/Navbar.css';
import ScrollToTop from 'react-scroll-up';
import Scroll from '../img/icons8-up-squared-50.png';

const Nvbar = (props) => {
  return (
    <div id="Navbar">
      <div className="Shadow">
        <div className="Header">
          <a href="http://dailyscribe.ir/">
            <div className="NavbarLogo"></div>
          </a>

          <div className="NavbarInfo">
            <ul>
              <li onClick={(e) => props.scrollToMap()}>تماس با مشاورین</li>
              <li onClick={(e) => props.scrollToEmployer()}>چارت کاری</li>
              <li onClick={(e) => props.scrollToAbout()}>درباره ما</li>
              <li
                className="animated-button"
                onClick={(e) => props.scrollToActive()}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                فراخوان استخدام
                <div className="exclamation">
                  {/* <img src={Logo} alt="exp"></img> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="information">
          <h1>
            <a href="http://dailyscribe.ir/">
              <span id="primery">DailyScribe</span>
            </a>
            Team{' '}
          </h1>
          <p>Work Hard In Silence , Let Your Success Make The Noise</p>
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span className='handelimg'>
          <img className="imghand" src={Scroll} alt="scrol"></img>
        </span>
      </ScrollToTop>
    </div>
  );
};

export default Nvbar;
