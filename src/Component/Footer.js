import React from 'react';
import '../Css/Footer.css';
import Location from '../img/icons8-location-48.png';
import Call from '../img/icons8-incoming-call-30 (1).png';
import Mail from '../img/icons8-mail-50.png';
import Telegram from '../img/icons8-telegram-app-48.png';
import Whatsapp from '../img/icons8-whatsapp-48.png';
import Instagram from '../img/icons8-instagram-48.png';
import MapP from '../img/map.jpg';

const Footer = () => {
  return (
    <div id="Footer">
      <div className="Company">
        <div className="aboutCompany">
          <a href="http://maps.google.com/?q=<35.757629>,<51.220493>">
            <img src={MapP} alt="map"></img>
          </a>
        </div>

        <div className="contactCompany">
          <div className="infoCom">
            <h1>ارتباط با ما</h1>
          </div>
          <div className="infoCom">
            <div className="logCom">
              <img src={Location} alt="logo" />
            </div>
            <div className="logInfo address ">
              <a href="http://maps.google.com/?q=<35.757629>,<51.220493>">
                <p>
                  نشانی : تهران -بزرگراه خرازی (همت غرب) - مجموعه رزمال - برج جنوبی
                  - طبقه ٧ - واحد ٧٠٢
                </p>
              </a>
            </div>
          </div>
          <div className="infoCom">
            <div className="logCom">
              <img src={Call} alt="logo" />
            </div>
            <div className="logInfo phone">
              <a href="tel:02140448480">
                {' '}
                <p>02140448480</p>
              </a>
              <a href="tel:02140448470">
                {' '}
                <p>- 02140448470</p>
              </a>
            </div>
          </div>
          <div className="infoComTime">
              <p className='workTime'>(ساعت پاسخگویی از ۱۰ تا ۱۶)</p>
            
          </div>
          <div className="infoCom">
            <div className="logCom">
              <img src={Mail} alt="logo" />
            </div>
            <div className="logInfo email">
              <a href="mailto:dailyscribe.ir@gmail.com">
                <p>dailyscribe.ir@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="infoCom app">
            <a href="https://telegram.me/dailyscribe">
              <img src={Telegram} alt="logo" />
            </a>
            <a href="whatsapp://send?text=Hello World!&phone=+989359252119">
              <img src={Whatsapp} alt="logo" />
            </a>
            <a href="https://www.instagram.com/dailyscribeir/">
              <img src={Instagram} alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="Creater">
        <p>
          © تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه دیلی اسکرایب می
          باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد
        </p>
          <a href="http://alireza-samaei.com/">
        <p>
          Site Template by Alireza Samaei Yekta{' '}
            {' '}
        </p>
          </a>
      </div>
    </div>
  );
};

export default Footer;
