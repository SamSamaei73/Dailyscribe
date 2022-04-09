import React from 'react';
import '../Css/About.css';
import Clip from '../img/clip.mp4'

const About = () => {
  return (
    <div id="about">
      <div className="partOne">
        <div className='aboutInfo'>
        <h1>
          {' '}
          درباره <span id="primery">ما</span>{' '}
        </h1>
        <p>
          مجموعه دیلی اسکرایب یک تیم فریلنسی است که از سال 2018 با تعدادی از
          شرکت ها ، دانشگاه ها ، مراکز و موسسات آموزشی معتبر خارجی در زمینه
          بایگانی و آرشیو اطلاعات و داده ها (به صورت دور کاری و اینترنتی) همکاری
          می کند
        </p>
        </div>
      </div>
      <div className="partTwo">
       <video className='videoClip' src={Clip} autoplay="false" controls="controls"/>
      </div>
    </div>
  );
};

export default About;
