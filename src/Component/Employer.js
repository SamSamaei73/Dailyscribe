import React from 'react';
import '../Css/Employer.css';
import Logo from '../img/6ef780f9d369a48fbc7f784626780c3e7187d223r1-480-480_hq.gif';

const Employer = () => {
  return (
    <div id="employer">
      <div className="sectionOne">
        <div className="sectionImg"></div>
        <div className="sectionInfo">
          <h1>
            شرایط  <span id="primery">همکاری</span>{' '}
          </h1>
          <div className='styleli'>
          <ul>
            <li>تسلط کامل به زبان انگلیسی</li>
            <li>دارای حداقل مدرک دیپلم</li>
            <li>استخدام از سراسر ایران</li>
          </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Employer;
